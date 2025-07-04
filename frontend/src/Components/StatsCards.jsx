// StatsCards.jsx
import React from 'react';

const StatsCards = () => (
  <div className="flex flex-wrap gap-5 mb-8">
    {[
      { title: 'New Requests', count: 45 },
      { title: 'Document Pending', count: 2 },
      { title: 'Appointments Today', count: 69 },
    ].map((card, idx) => (
      <div
        key={idx}
        className="flex-1 min-w-[220px] bg-white p-5 border-2 border-black rounded-lg shadow-sm"
      >
        <h2 className="mb-2 font-semibold text-lg">{card.title}</h2>
        <span className="text-2xl font-bold">{card.count}</span>
      </div>
    ))}
  </div>
);

export default StatsCards;
