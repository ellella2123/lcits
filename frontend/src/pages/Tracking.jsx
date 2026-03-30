import { useState } from "react";
import { updateTracking } from "../services/trackingService";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Tracking() {
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("");

  const updateStatusHandler = async () => {
    await updateTracking(clientId, status);
    alert("Status Updated");
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl mb-4">Sample Tracking</h2>
      <input
        placeholder="Client ID"
        className="p-2 bg-bgSecondary mb-2"
        onChange={(e) => setClientId(e.target.value)}
      />
      <input
        placeholder="Status"
        className="p-2 bg-bgSecondary mb-2"
        onChange={(e) => setStatus(e.target.value)}
      />
      <button onClick={updateStatusHandler} className="btn-primary">
        Update Status
      </button>
    </DashboardLayout>
  );
}