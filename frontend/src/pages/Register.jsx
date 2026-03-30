import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async () => {
    await registerUser(form);
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="glass p-8 w-96">
        <h2 className="text-2xl mb-4">Register</h2>
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
          Register
        </button>
      </div>
    </div>
  );
}