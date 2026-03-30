import { useState } from "react";
import { createClient } from "../services/clientService";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Clients() {
  const [form, setForm] = useState({
    full_name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    test_requested: "",
    sample_type: ""
  });

  const handleSubmit = async () => {
    const res = await createClient({
      ...form,
      age: Number(form.age)
    });
    alert("Client Registered: " + res.lab_id);
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl mb-4">Register Client</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            placeholder={key}
            className="p-2 bg-bgSecondary"
            onChange={(e) =>
              setForm({ ...form, [key]: e.target.value })
            }
          />
        ))}
      </div>
      <button onClick={handleSubmit} className="btn-primary mt-4">
        Submit
      </button>
    </DashboardLayout>
  );
}