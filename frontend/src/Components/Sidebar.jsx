// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#2c3e50] text-white p-5 sticky top-0 h-screen shrink-0">
      <h3 className="text-lg font-semibold mb-5">e-RTO Smart Management System</h3>
      <nav>
        <ul className="flex flex-col gap-3">
          {['🏠 Dashboard', '📄 Applications', '📅 Appointments', '✅ Verifications', '⚙️ Settings'].map((item, idx) => (
            <li
              key={idx}
              className="border border-white rounded-md px-4 py-2 transition-transform duration-200 hover:bg-[#649092] hover:text-[#202c39] hover:-translate-y-1"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;