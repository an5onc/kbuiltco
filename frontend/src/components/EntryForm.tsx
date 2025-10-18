import { useState } from "react";
import { API_URL } from "../api";
import redK from "../assets/images/redK.png";
import building from "../assets/images/building.png";

export default function EntryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [question1, setQuestion1] = useState<"yes" | "no" | "">("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(phone)) {
      setMessage("Phone number must be exactly 10 digits.");
      return;
    }
    const payload = {
      name,
      email,
      phone,
      question1
    };
    const res = await fetch(`${API_URL}/entries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      setMessage("Entry submitted! Good Luck, I hope you win!");
    } else {
      setMessage("Oops — something went wrong.");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${building})` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <img src={redK} alt="Kieferbuilt Logo" className="mx-auto mb-4 w-28" />
        <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">
          Enter the Raffle
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Fill out your details below to participate.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            required
          />
          <input
            placeholder="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            pattern="^[0-9]{10}$"
            title="Phone number must be exactly 10 digits"
            required
          />

          {/* Question 1 — yes / no radio buttons */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-1">
              Are you in the market for a new home build/remodel?
            </label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="question1"
                  value="yes"
                  checked={question1 === "yes"}
                  onChange={() => setQuestion1("yes")}
                  className="form-radio"
                  required
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="question1"
                  value="no"
                  checked={question1 === "no"}
                  onChange={() => setQuestion1("no")}
                  className="form-radio"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>

          {message && <p className="mt-2 text-green-600 text-center">{message}</p>}

          <p className="mt-4 text-xs text-gray-500">
            By clicking Submit, you give Kieferbuilt Contracting permission to contact you using the information
            provided on this form. Message and data rates may apply. 
          </p>
        </form>
      </div>
    </div>
  );
}