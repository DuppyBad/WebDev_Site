import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import HeadText from "@/shared/HeadText";
import Logo from "@/assets/icon.png";

// Should be just like the login page, just changed post route and footer

interface LoginForm {
  username: string;
  password: string;
}

function Register() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // async code, axios post is promise based so we don't always get real data NOW, but we will on await
  // Demo of our understanding of async, keep eye on this as it is most likely the most unstable component
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/register", loginForm);
      console.log(response.data); // Get response from backend which should contain our jwt
      // REMOVE IN PRODUCTION
    } catch (error) {
      // LEAVE IN PRODUCTION
      console.log(error); // If for some reason we don't get a response, we don't destroy the website immediately
    }
  };

  return (
    <motion.body
      className="flex min-h-screen flex-col bg-rosePine-pine"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.9 }}
      variants={{
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <motion.div
        className="m-auto h-screen max-w-md flex-grow rounded-2xl bg-rosePine-surface p-5"
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
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img alt="logo" className="mx-auto mb-5 w-fit" src={Logo} />
          </motion.header>
          {/* The handleFormSubmit takes our submission and converts it so we can send via axios for ease of use and to allow async */}
          <form
            className="mb-4 px-8 py-6 text-center"
            onSubmit={handleFormSubmit}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 2.5 }}
              variants={{
                hidden: { opacity: 0, x: 0 },
                visible: { opacity: 1, x: 0 },
              }}
            ></motion.div>
            <HeadText>Sign up with Tinybrain Ltd!</HeadText>
            <label className="mb-2 block font-jetbrainsmono">
              Username:
              <input
                type="text"
                className="mb-6 w-full p-2 text-rosePine-text outline-none focus:bg-rosePine-gold"
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
                className="mb-6 w-full p-2 text-rosePine-text outline-none focus:bg-rosePine-gold"
                name="password"
                value={loginForm.password}
                onChange={handleFormChange}
              />
            </label>
            <br />
            <button
              type="submit"
              className="text-md mx-auto rounded-lg bg-rosePine-love px-10 py-2 hover:bg-rosePineDawn-love hover:text-rosePine-text"
            >
              Register
            </button>
          </form>
          <footer>
            <a className="text-md inset-x-0 bottom-0 float-right flex-shrink-0 text-rosePine-text hover:text-rosePine-love">
              Copyright Tinybrain Ltd, 2023. Tinybrain Ltd is a holding of
              Iseefa Francis
            </a>
          </footer>
        </motion.div>
      </motion.div>
    </motion.body>
  );
}

export default Register;
