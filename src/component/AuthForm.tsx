import React, { useState } from "react";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
    // Reset form saat toggle
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginForm) {
      // Handle login
      console.log("Login:", { username, password });
    } else {
      // Handle registration
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log("Register:", { username, email, password });
    }
  };

  return (
    <>
      <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
        <div className="flex content-start items-start mb-6">
          <button
            type="button"
            onClick={() => setIsLoginForm(true)}
            className={`flex-1 py-1 ${
              isLoginForm ? "border-b-2 border-black" : ""
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={toggleForm}
            className={`flex-1 py-1 ${
              !isLoginForm ? "border-b-2 border-black" : ""
            }`}
          >
            Create Account
          </button>
        </div>

        {!isLoginForm && (
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 "
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
          required
        />

        {!isLoginForm && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-sm focus:outline-none focus:ring-1 focus:ring-zinc-900"
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-zinc-950 text-white py-2 rounded-sm hover:bg-zinc-800 transition-colors"
        >
          {isLoginForm ? "Login" : "Register"}
        </button>

        <div className="flex items-center my-2">
          <div className="flex-1 border-t border-zinc-400"></div>
          <span className="px-2 text-zinc-600 text-sm">Or</span>
          <div className="flex-1 border-t border-zinc-400"></div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-300 py-2 rounded-sm hover:bg-zinc-100 transition-colors"
        >
          <img
            src="data:image/jpeg;base64,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"
            alt="Google"
            className="w-5 h-5"
          />
          {isLoginForm ? "Login" : "Register"} with Google
        </button>
      </form>
    </>
  );
};

export default AuthForm;
