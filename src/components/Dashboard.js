import React from "react";
import { GiClockwork } from "react-icons/gi";

const Dashboard = () => {
  const latestPages = [
    {
      title: "Introduction to React",
      category: "Web Development",
      author: "John Doe",
    },
    {
      title: "JavaScript Fundamentals",
      category: "Web Development",
      author: "Jane Smith",
    },
    {
      title: "Data Structures and Algorithms",
      category: "Computer Science",
      author: "Alice Johnson",
    },
    {
      title: "Machine Learning Basics",
      category: "Artificial Intelligence",
      author: "Bob Williams",
    },
    {
      title: "Introduction to Python",
      category: "Programming",
      author: "David Brown",
    },
  ];

  return (
    <div>
      <div className="flex items-center mb-4">
        <GiClockwork className="text-[32px] me-3 text-blue-700" />
        <h2 className="text-2xl font-semibold text-blue-700">Dashboard</h2>
      </div>
      <div className="text-lg ps-2 py-3 text-blue-900 font-bold">
        Latest Pages
      </div>
      <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Page Title
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Author
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {latestPages.map((page, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : "bg-gray-50"}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                  {page.title}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {page.category}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {page.author}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
