import React, { useState } from "react";
import { Menu } from "lucide-react"; // hamburger icon

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { label: "Dashboard", emoji: "🏠", href: "#" },
    { label: "Applications", emoji: "📄", href: "#" },
    { label: "Appointments", emoji: "📅", href: "#" },
    { label: "Verifications", emoji: "✅", href: "#" },
    { label: "Settings", emoji: "⚙️", href: "#" },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white text-black p-5 sticky top-0 h-screen shrink-0 flex flex-col justify-between transition-all duration-300 group `}
      onMouseEnter={() => collapsed && setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      {/* Top Section: Hamburger + Title */}
      <div>
        <div className="flex items-center justify-between mb-6">
          {/* Hamburger Icon */}
          <button onClick={() => setCollapsed(!collapsed)} className="focus:outline-none">
            <Menu className="text-black w-6 h-6 cursor-pointer " />
          </button>

          {/* Title - hidden when collapsed */}
          {!collapsed && (
            <h3 className="text-lg font-semibold mx-2">e-RTO Smart Management</h3>
          )}
        </div>

        {/* Navigation Items */}
        <nav>
          <ul className="flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 border border-black rounded-md px-3 py-2 transition-transform duration-200 hover:bg-[#9abbf0] hover:-translate-y-1"
              >
                <span className="cursor-pointer">{item.emoji}</span>
                {!collapsed && <a href={item.href}>{item.label}</a>}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Bottom Logout Button */}
      <button className="flex items-center gap-2 text-white bg-[#e74c3c] hover:bg-[#c0392b] px-4 py-2 rounded transition duration-200 cursor-pointer" onClick={()=>{
        confirm("Are you sure you want to log out?")
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
          />
        </svg>
        {!collapsed && <span>Log Out</span>}
      </button>
    </aside>
  );
};

export default Sidebar;
