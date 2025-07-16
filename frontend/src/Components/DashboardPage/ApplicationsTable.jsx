// ApplicationsTable.jsx
import React from 'react';

const ApplicationsTable = () => {
  const data = [
    { id: "APP2025001", name: "Ethan Harper", type: "Driving License", status: "Approved", date: "2025-07-01" },
    { id: "APP2025002", name: "Sarah Clark", type: "Registration", status: "Pending", date: "2025-07-01" },
    { id: "APP2025003", name: "James Bond", type: "Driving License", status: "Approved", date: "2025-07-02" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md text-indigo-800">
        <thead className="bg-[#2c3e50] text-white">
          <tr>
            <th className="p-3 text-left">Application ID</th>
            <th className="p-3 text-left">Applicant Name</th>
            <th className="p-3 text-left">Applicant Type</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Submission Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="even:bg-gray-100 hover:bg-blue-100 border-b">
              <th scope="row" className="p-3 text-gray-700 font-semibold">{item.id}</th>
              <td className="p-3">{item.name}</td>
              <td className="p-3">{item.type}</td>
              <td className="p-3">
                <span className="bg-green-100 text-green-800 font-bold text-sm px-3 py-1 rounded">
                  {item.status}
                </span>
              </td>
              <td className="p-3">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;