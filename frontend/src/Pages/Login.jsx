import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "", remember: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", form);
    // Add login logic here (API call, validation, etc.)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/logo.png"
            alt="eRTO Logo"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-blue-800">eRTO Login</h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Welcome to the Smart RTO Management System
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email / Username</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <Mail className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 mt-1">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="ml-2 w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="accent-blue-800 cursor-pointer"
              />
              Remember Me
            </label>
            <a href="#" className="text-blue-800 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white font-semibold cursor-pointer rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        {/* Register */}
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-800 hover:underline font-medium">
            Register Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
