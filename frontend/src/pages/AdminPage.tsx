import { useState } from "react";
import { API_URL } from "../api";

interface Entry {
  id: number;
  name: string;
  email: string;
  phone?: string;
  question1?: string;
}

export default function AdminPage() {
  const [winner, setWinner] = useState<{ name: string; email: string } | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const pickWinner = async () => {
    const res = await fetch(`${API_URL}/random_winner`);
    const data = await res.json();
    if (data.message === "No entries yet.") {
      setStatusMessage("No entries are available.");
      setWinner(null);
    } else {
      setWinner(data);
      setStatusMessage("");
    }
  };

  const loadEntries = async () => {
    try {
      const res = await fetch(`${API_URL}/entries`);
      const data = await res.json();
      console.log("Fetched entries data:", data);
      const arr: Entry[] = Array.isArray(data) ? data : data.entries ?? [];
      if (!Array.isArray(arr)) {
        console.error("entries not array:", arr);
        return;
      }
      if (arr.length === 0) {
        setStatusMessage("No entries are available.");
        setEntries([]);
      } else {
        arr.sort((a, b) => a.name.localeCompare(b.name));
        setEntries(arr);
        setStatusMessage("");
      }
    } catch (err) {
      console.error("Failed to fetch entries", err);
    }
  };

  return (
    <div className="p-6 text-center">
      <button onClick={pickWinner} className="bg-red-500 text-white p-3 rounded">
        Select Winner
      </button>

      <button onClick={loadEntries} className="bg-blue-500 text-white p-3 rounded mb-4 ml-4">
        Show All Entries
      </button>

      {statusMessage && (
        <p className="mt-4 font-semibold text-red-600">{statusMessage}</p>
      )}

      {winner && (
        <p className="mt-4 font-bold text-lg">
          {winner.name} ({winner.email})
        </p>
      )}

      <hr className="my-6" />

      {entries.length > 0 && (
        <ul className="space-y-2 max-w-md mx-auto text-left">
          {entries.map((entry) => (
            <li key={entry.id} className="border rounded p-2">
              <div><strong>Name:</strong> {entry.name}</div>
              <div><strong>Email:</strong> {entry.email}</div>
              {entry.phone && <div><strong>Phone:</strong> {entry.phone}</div>}
              {entry.question1 && (
                <div>
                  <strong>Interested in new build/remodel?</strong> {entry.question1}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}