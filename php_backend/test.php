<?php

// Establish a connection to MongoDB
// Host this in docker 
$mongo = new MongoDB\Driver\Manager("mongodb://localhost:27017");

// Get the posted login data
// We will post via axios
$username = $_POST["username"];
$password = $_POST["password"];

// Construct a query to find a user with the given username and password
$filter = [
    'username' => $username,
    'password' => $password
];
$query = new MongoDB\Driver\Query($filter);

// Execute the query and get the result
$result = $mongo->executeQuery('database_name.collection_name', $query);

// Check if a user with the given username and password was found
if ($result->isDead() || count($result->toArray()) == 0) {
    // User not found, return an error message
    echo "Invalid username or password";
} else {
    // User found, return a success message
    echo "Login successful";
}
