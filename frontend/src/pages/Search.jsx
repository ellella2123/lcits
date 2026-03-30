import { useState } from "react";
import API from "../services/api";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await API.get(`/search?q=${query}`);
    setResults(res.data);
  };

  return (
    <DashboardLayout>
      <h2 className="text-xl mb-4">Search</h2>
      <input
        placeholder="Search by Lab ID, Name or Phone"
        className="p-2 bg-bgSecondary mb-2"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={search} className="btn-primary mb-4">
        Search
      </button>

      <div>
        {results.map((r) => (
          <div key={r.id} className="glass p-3 mb-2">
            {r.full_name} - {r.lab_id}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}