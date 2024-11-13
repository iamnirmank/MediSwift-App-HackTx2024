"use client";

import React, { useState } from "react";

export default function AppointmentsTable() {
  const initialAppointments = [
    { date: "Nov 2ⁿᵈ, 2024", time: "21:00", patient: "David Rieh", status: "Completed" },
    { date: "Nov 3ʳᵈ, 2024", time: "00:15", patient: "Richard Esselman", status: "Pending review" },
    { date: "Nov 3ʳᵈ, 2024", time: "08:00", patient: "Chester Bennington", status: "Pending review" },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);

  const handleStatusChange = (index, newStatus) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = newStatus;
    setAppointments(updatedAppointments);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">Time</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">Patient Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-700 border-b">{appointment.date}</td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b">{appointment.time}</td>
              <td className="px-6 py-4 text-sm text-gray-700 border-b">{appointment.patient}</td>
              <td className="px-6 py-4 text-sm font-medium border-b">
                <select
                  className={`border rounded px-2 py-1 ${
                    appointment.status === "Completed" ? "text-green-600" : "text-orange-600"
                  }`}
                  value={appointment.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option value="Completed">Completed</option>
                  <option value="Pending review">Pending review</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
