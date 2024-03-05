import React, { useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { Button } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Users = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    group: "",
  });

  const [users, setUsers] = useState([
    // User data stored in state
    {
      id: 1,
      name: "Austen Paige",
      email: "paige@info.com",
      group: "Admin",
    },
    {
      id: 2,
      name: "Jenni Lora",
      email: "jenni@info.com",
      group: "Registered",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@info.com",
      group: "Guest",
    },
    {
      id: 4,
      name: "Jane Smith",
      email: "jane@info.com",
      group: "Admin",
    },
    {
      id: 5,
      name: "Bob Johnson",
      email: "bob@info.com",
      group: "Registered",
    },
  ]);

  const handleCheckboxChange = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleNewUser = () => {
    setShowNewModal(true);
  };

  const handleEditUser = () => {
    if (selectedRows.length === 1) {
      const user = users.find((user) => user.id === selectedRows[0]);
      setSelectedUser(user);
      setShowEditModal(true);
    } else {
      // Show error message or alert if no user or multiple users are selected
      console.error("Please select a single user to edit.");
    }
  };

  const handleDeleteUser = () => {
    // Filter out the users that are selected for deletion
    const updatedUsers = users.filter(
      (user) => !selectedRows.includes(user.id)
    );

    // Update the users state with the filtered users
    setUsers(updatedUsers);

    // Clear the selected rows
    setSelectedRows([]);
  };

  const handleCloseNewModal = () => {
    setShowNewModal(false);
    setNewUserData({ name: "", email: "", group: "" });
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleSaveNewUser = () => {
    // Create a new user object with an ID (you can generate IDs as per your requirement)
    const newUser = {
      id: users.length + 1, // Assuming IDs start from 1 and increment by 1
      name: newUserData.name,
      email: newUserData.email,
      group: newUserData.group,
    };

    // Update the users state by adding the new user to the existing users
    setUsers([...users, newUser]);

    // Close the modal and reset new user data
    setShowNewModal(false);
    setNewUserData({ name: "", email: "", group: "" });
  };

  const handleSaveEditUser = (e) => {
    // Update the user directly in the users state
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id
        ? {
            ...user,
            name: newUserData.name || selectedUser.name,
            email: newUserData.email || selectedUser.email,
            group: newUserData.group || selectedUser.group,
          }
        : user
    );
    setUsers(updatedUsers);
    setShowEditModal(false);
    setSelectedRows([]); // Clear selected rows
  };

  const handleEditUserDataChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
    console.log(selectedUser);
  };
  const handleNewUserDataChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <FaUserTie className="text-[32px] me-3 text-blue-700" />
          <h2 className="text-2xl font-semibold text-blue-700">Users</h2>
        </div>
        <Button.Group>
          <Button color="gray" onClick={handleNewUser}>
            <FaPlus className="mr-3 h-4 w-4" />
            New
          </Button>
          <Button color="gray" onClick={handleEditUser}>
            <MdEdit className="mr-3 h-4 w-4" />
            Edit
          </Button>
          <Button color="gray" onClick={handleDeleteUser}>
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
                  onChange={() => setSelectedRows(users.map((user) => user.id))}
                />
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
              >
                Group
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className={selectedRows.includes(user.id) ? "bg-blue-100" : ""}
              >
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(user.id)}
                    checked={selectedRows.includes(user.id)}
                  />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-blue-400">
                  {user.name}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.group}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* New User Modal */}
      {showNewModal && !showEditModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg px-6 pt-3 pb-4 w-[460px] flex flex-col gap-4 shadow-2xl ">
            <div className="flex gap-3 items-center">
              <FaUserTie className="text-lg" />
              <h2 className="text-lg font-bold text-black ">New User</h2>
            </div>
            <div className="flex justify-between items-center gap-5">
              <label className="text-lg">Name:</label>
              <input
                type="text"
                name="name"
                value={newUserData.name}
                onChange={handleNewUserDataChange}
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>
            <div className="flex justify-between items-center gap-6">
              <label className="text-lg">Email:</label>
              <input
                type="email"
                name="email"
                value={newUserData.email}
                onChange={handleNewUserDataChange}
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <label className="text-lg">Group:</label>
              <input
                type="text"
                name="group"
                value={newUserData.group}
                onChange={handleNewUserDataChange}
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>
            <div className="flex gap-4 justify-end">
              <button
                className="border rounded shadow-md text-sm text-white font-semibold bg-red-600 px-2.5 py-1 hover:shadow-xl hover:translate-y-0.5"
                onClick={handleCloseNewModal}
              >
                Cancel
              </button>
              <button
                className="border rounded shadow-md text-sm text-white font-semibold bg-blue-600 px-2.5 py-1 hover:shadow-xl hover:translate-y-0.5"
                onClick={handleSaveNewUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit User Modal */}
      {showEditModal && !showNewModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 flex justify-center items-center">
          <div className="bg-white rounded-lg px-6 pt-3 pb-4 w-[460px] flex flex-col gap-4 shadow-2xl ">
            <div className="flex gap-3 items-center">
              <MdEdit className="text-lg" />
              <h2 className="text-lg font-bold text-black ">Edit User</h2>
            </div>
            <div className="flex justify-between items-center gap-5">
              <label className="text-lg">Name:</label>
              <input
                type="text"
                name="name"
                value={selectedUser?.name}
                onChange={handleEditUserDataChange} // Handle input changes
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>
            <div className="flex justify-between items-center gap-6">
              <label className="text-lg">Email:</label>
              <input
                type="email"
                name="email"
                value={selectedUser?.email}
                onChange={handleEditUserDataChange} // Handle input changes
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>
            <div className="flex justify-between items-center gap-4">
              <label className="text-lg">Group:</label>
              <input
                type="text"
                name="group"
                value={selectedUser?.group}
                onChange={handleEditUserDataChange} // Handle input changes
                className="flex-1 text-sm rounded shadow-lg"
              />
            </div>

            <div className="flex gap-4 justify-end">
              <button
                className="border rounded shadow-md text-sm text-white font-semibold bg-red-600 px-2.5 py-1 hover:shadow-xl hover:translate-y-0.5"
                onClick={handleCloseEditModal}
              >
                Cancel
              </button>
              <button
                className="border rounded shadow-md text-sm text-white font-semibold bg-blue-600 px-2.5 py-1 hover:shadow-xl hover:translate-y-0.5"
                onClick={handleSaveEditUser}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
