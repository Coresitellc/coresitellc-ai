"use client";

import { useState } from "react";

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const lead = {
      business: formData.get("business"),
      owner: formData.get("owner"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      budget: formData.get("budget"),
      ai: formData.get("ai"),
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(lead),
      });

      if (response.ok) {
        setStatus("✅ Lead sent successfully!");
        form.reset();
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send.");
    }
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-96 rounded-3xl border border-cyan-400 bg-slate-900 p-6 shadow-2xl">
          <h2 className="text-2xl font-bold text-cyan-300">
            Core AI Employee
          </h2>

          <p className="mt-3 text-slate-300">
            👋 Hi! I can help you get a website quote.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">

            <input
              name="business"
              required
              placeholder="Business Name"
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            />

            <input
              name="owner"
              required
              placeholder="Owner Name"
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            />

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            />

            <select
              name="budget"
              required
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            >
              <option value="">Budget</option>
              <option>Under $1,500</option>
              <option>$1,500 - $3,000</option>
              <option>$3,000+</option>
            </select>

            <select
              name="ai"
              required
              className="w-full rounded-xl bg-slate-800 p-3 text-white"
            >
              <option value="">Need AI?</option>
              <option>YES</option>
              <option>NO</option>
            </select>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 py-3 font-bold text-black"
            >
              Submit Lead
            </button>

            {status && (
              <p className="text-center text-cyan-300">
                {status}
              </p>
            )}

          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-cyan-400 px-6 py-4 font-bold text-black shadow-xl"
      >
        🤖 Talk to AI
      </button>
    </>
  );
}