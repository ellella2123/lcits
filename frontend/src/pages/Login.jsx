import { useState } from "react";
import { loginUser } from "../services/authService";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    const res = await loginUser(form);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="glass p-8 w-96">
        <h2 className="text-2xl mb-4">Login</h2>
        <input
          className="w-full mb-3 p-2 bg-bgSecondary"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="w-full mb-3 p-2 bg-bgSecondary"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button onClick={handleSubmit} className="btn-primary w-full">
          Login
        </button>
      </div>
    </div>
  );
}