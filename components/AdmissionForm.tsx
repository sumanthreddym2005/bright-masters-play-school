"use client";

import { useState } from "react";

export default function AdmissionForm() {
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    age: "",
    phone: ""
  });

  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/admission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error);
      return;
    }

    setMessage(data.message);
    setForm({ parentName: "", childName: "", age: "", phone: "" });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        required
        placeholder="Parent Name"
        className="w-full border p-3 rounded"
        value={form.parentName}
        onChange={(e) =>
          setForm({ ...form, parentName: e.target.value })
        }
      />
      <input
        required
        placeholder="Child Name"
        className="w-full border p-3 rounded"
        value={form.childName}
        onChange={(e) =>
          setForm({ ...form, childName: e.target.value })
        }
      />
      <input
        required
        type="number"
        step="0.1"
        placeholder="Child Age"
        className="w-full border p-3 rounded"
        value={form.age}
        onChange={(e) =>
          setForm({ ...form, age: e.target.value })
        }
      />
      <input
        required
        placeholder="Phone Number"
        className="w-full border p-3 rounded"
        value={form.phone}
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <button
        type="submit"
        className="bg-primary text-white w-full py-3 rounded-full"
      >
        Submit Enquiry
      </button>

      {message && (
        <p className="text-center text-sm mt-2">{message}</p>
      )}
    </form>
  );
}