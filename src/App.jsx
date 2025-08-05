import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import EmployeeForm from "./components/EmployeeForm.jsx";
import EmployeeList from "./components/EmployeeList.jsx";

const STORAGE_KEY = "employees";

export default function App() {
  const [view, setView] = useState("list");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setEmployees(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (emp) => {
    if (employees.some((e) => e.id === emp.id || e.dni === emp.dni)) {
      alert("Empleado ya registrado");
      return;
    }
    setEmployees([...employees, { ...emp, status: "Activo" }]);
    setView("list");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar setView={setView} />
      <main className="p-4 flex-1">
        {view === "form" && <EmployeeForm onSubmit={addEmployee} />}
        {view === "list" && <EmployeeList employees={employees} />}
      </main>
    </div>
  );
}

