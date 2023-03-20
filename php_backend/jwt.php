<?php

// Connect to the MongoDB database
// External library for client handling
$mongo = new MongoDB\Client("mongodb://localhost:27017");
$db = $mongo->selectDatabase("tinybrain");

// Get the POSTed parameters
// Not the best idea to post the raw password, look into hashing client side? Is that undue client effort?
$username = $_POST['username'];
$password = $_POST['password'];

// Hash the password using SHA256
$hashedPassword = hash('sha256', $password);

// Check if the username and hashed password exist in the database
$collection = $db->selectCollection("users");
$user = $collection->findOne(['username' => $username, 'password' => $hashedPassword]);

if ($user) {
  // If the user exists, create a JWT token
  $tokenPayload = [
    'username' => $username,
    'exp' => time() + (60 * 60 * 24) // Expiration time of 1 day
  ];

  $jwt = jwt_encode($tokenPayload, 'secret_key');

  // Return the JWT token
  echo json_encode(['token' => $jwt]);
} else {
  // If the user does not exist, return an error
  // Genericised error so that brute force attacks are harder
  echo json_encode(['error' => 'Invalid username or password']);
}

// Helper function to encode JWT
// This is an abomination JWT rules are horrible but functions well
function jwt_encode($payload, $key)
{
  $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
  $payload = json_encode($payload);
  $base64UrlHeader = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
  $base64UrlPayload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
  $signature = hash_hmac('sha256', $base64UrlHeader . '.' . $base64UrlPayload, $key, true);
  $base64UrlSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
  return $base64UrlHeader . '.' . $base64UrlPayload . '.' . $base64UrlSignature;
}
