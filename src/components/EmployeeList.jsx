export default function EmployeeList({ employees }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="px-2 py-1">ID</th>
          <th className="px-2 py-1">DNI</th>
          <th className="px-2 py-1">Nombre</th>
          <th className="px-2 py-1">Área</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="border-t">
            <td className="px-2 py-1">{emp.id}</td>
            <td className="px-2 py-1">{emp.dni}</td>
            <td className="px-2 py-1">{emp.name}</td>
            <td className="px-2 py-1">{emp.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

