import React, { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  // setInterval(() => {
  //   window.location.reload();
  // }, 30000);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://megascalebackend.vercel.app/user"
        );
        console.log(response.data.data);
        setUsers(response.data.data.reverse()); // Assuming response.data is an array of user objects
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Error fetching users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Ensure users is always an array before filtering
  const filteredUsers = Array.isArray(users)
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="py-8">
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-gray-400 p-2 mb-4"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              WhatsApp Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={`https://wa.me/${user.mobile}`}
                  className="text-sm text-gray-900"
                >
                  {user.mobile}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <input
        type="text"
        placeholder="Search by name..."
        className="border border-gray-400 p-2 mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      {error && <p className="text-red-500">{error}</p>}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              WhatsApp Number
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.mobile}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default UserTable;
