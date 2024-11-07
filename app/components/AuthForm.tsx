"use client"
// components/AuthForm.tsx
import { signIn } from "next-auth/react";
import { useState } from "react";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchModeHandler = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle manual login or registration
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[50%]">
      <h2 className="text-2xl font-bold text-center text-white mb-4">{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-700 text-white placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="w-full p-2 mb-4 text-white bg-purple-600 rounded hover:bg-purple-700"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
      <div className="flex flex-col mb-4">
        <button
          className="w-full p-2 mb-2 text-white bg-red-600 rounded hover:bg-red-700"
          onClick={() => signIn("google")}
        >
          Login with Google
        </button>
        <button
          className="w-full p-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          onClick={() => signIn("facebook")}
        >
          Login with Facebook
        </button>
      </div>
      <button
        className="text-white bg-black/70 rounded-xl hover:bg-black px-3 py-2 ring-2"
        onClick={switchModeHandler}
      >
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default AuthForm;