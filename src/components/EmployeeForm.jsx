import { useState } from "react";

const initial = { id: "", dni: "", name: "", area: "" };

export default function EmployeeForm({ onSubmit }) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initial);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
      <input
        name="id"
        placeholder="ID"
        value={form.id}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        name="dni"
        placeholder="DNI"
        value={form.dni}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        name="name"
        placeholder="Nombres"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        name="area"
        placeholder="Área"
        value={form.area}
        onChange={handleChange}
        className="w-full border p-2"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2"
        type="submit"
      >
        Guardar
      </button>
    </form>
  );
}

