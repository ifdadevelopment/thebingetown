"use client";

import { useState } from "react";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function FranchiseApplicationForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
    }, 1000);
  };

  return (
    <section
      id="franchise-form"
      className="px-4 md:px-8 py-16 bg-gradient-to-br from-purple-100 to-gray-100"
    >
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-900">
          Let’s Bring Binge Town to Your City
        </h3>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="+91 9876543210"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            name="state"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="city"
            placeholder="City"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            name="investmentAmount"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Investment Amount</option>
            <option value="25-30 lakhs">25–30 lakhs</option>
            <option value="30-40 lakhs">30–40 lakhs</option>
            <option value="40-50 lakhs">40–50 lakhs</option>
          </select>

          <select
            name="investmentPreference"
            required
            className="w-full border rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Investment Preference</option>
            <option value="Active Management (FOFO)">
              Active Management (FOFO)
            </option>
            <option value="Passive Management (FICO)">
              Passive Management (FICO)
            </option>
            <option value="Not sure for now">Not sure for now</option>
          </select>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white py-2.5 rounded-lg font-medium
              transition disabled:opacity-50"
            style={{ backgroundColor: "#34265C" }}
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>
      </div>
    </section>
  );
}
