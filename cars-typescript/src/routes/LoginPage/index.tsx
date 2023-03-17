import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import HeadText from "@/shared/HeadText";
import Logo from "@/assets/icon.png";
import { KeyIcon } from "@heroicons/react/24/outline";

interface LoginForm {
  username: string;
  password: string;
}

function Login() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // async code, axios post is promise based so we don't always get real data NOW, but we will on await
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/login", loginForm);
      console.log(response.data); // Get response from backend which should contain our jwt
      // REMOVE IN PRODUCTION
    } catch (error) {
      // LEAVE IN PRODUCTION
      console.log(error); // We're in this case because the sun flipped a bit or something. Here just in case
    }
  };

  return (
    <motion.div
      className="flex h-screen w-full items-center justify-center bg-rosePine-surface"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="shadow-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* The handleFormSubmit takes our submission and converts it so we can send via axios for ease of use and to allow async */}
        <form className="mb-4 px-8 py-6" onSubmit={handleFormSubmit}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2.5 }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              alt="logo"
              src={Logo}
              className="top-0 items-center py-2"
            ></img>
          </motion.div>
          <HeadText>Login to Tinybrain Ltd</HeadText>
          <label className="block font-jetbrainsmono ">
            Username:
            <input
              type="text"
              name="username"
              value={loginForm.username}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <label className="block font-jetbrainsmono">
            Password:
            <input
              type="password"
              name="password"
              value={loginForm.password}
              onChange={handleFormChange}
            />
          </label>
          <br />
          <button
            type="submit"
            className="text-md items-center rounded-lg bg-rosePine-love px-10 py-2 hover:bg-rosePineDawn-love hover:text-rosePine-text"
          >
            Login
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Login;
