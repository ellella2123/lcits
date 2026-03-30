import { useState } from "react";
import { uploadResult } from "../services/resultService";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Results() {
  const [clientId, setClientId] = useState("");
  const [resultData, setResultData] = useState("");

  const submit = async () => {
    await uploadResult({
      client_id: Number(clientId),
      result_data: resultData
    });
    alert("Result Uploaded");
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl mb-4">Upload Results</h2>
      <input
        placeholder="Client ID"
        className="p-2 bg-bgSecondary mb-2"
        onChange={(e) => setClientId(e.target.value)}
      />
      <textarea
        placeholder="Result Data"
        className="p-2 bg-bgSecondary mb-2 w-full"
        onChange={(e) => setResultData(e.target.value)}
      />
      <button onClick={submit} className="btn-primary">
        Upload
      </button>
    </DashboardLayout>
  );
}