import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa6";
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Categories = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const latestPages = [
    {
      id: 1,
      title: "Introduction to React",
      category: "Web Development",
      author: "John Doe",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      category: "Web Development",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      category: "Computer Science",
      author: "Alice Johnson",
    },
    {
      id: 4,
      title: "Machine Learning Basics",
      category: "Artificial Intelligence",
      author: "Bob Williams",
    },
    {
      id: 5,
      title: "Introduction to Python",
      category: "Programming",
      author: "David Brown",
    },
  ];

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <FaFolderOpen className="text-[32px] me-3 text-blue-700" />
          <h2 className="text-2xl font-semibold text-blue-700">Categories</h2>
        </div>
        <Button.Group>
          <Button color="gray">
            <FaPlus className="mr-3 h-4 w-4" />
            New
          </Button>
          <Button color="gray">
            <MdEdit className="mr-3 h-4 w-4" />
            Edit
          </Button>
          <Button color="gray">
            <MdDelete className="mr-3 h-4 w-4" />
            Delete
          </Button>
        </Button.Group>
      </div>
      <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                <input
                  type="checkbox"
                  onChange={() =>
                    setSelectedRows(latestPages.map((page) => page.id))
                  }
                />
              </th>
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
            {latestPages.map((page) => (
              <tr
                key={page.id}
                className={selectedRows.includes(page.id) ? "bg-blue-100" : ""}
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(page.id)}
                    checked={selectedRows.includes(page.id)}
                  />
                </td>
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

export default Categories;
