export default function Sidebar({ setView }) {
  return (
    <aside className="w-48 bg-gray-800 text-white min-h-screen">
      <nav className="p-4 space-y-2">
        <button className="block w-full text-left" onClick={() => setView("list")}>Empleados</button>
        <button className="block w-full text-left" onClick={() => setView("form")}>Nuevo</button>
      </nav>
    </aside>
  );
}

