import React, { useEffect, useState } from "react";

function ViewUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace this with your API call
    const dummyUsers = [
      {
        id: 1,
        name: "Jeet Kumar",
        email: "jeet@gmail.com",
        phone: "9876543210",
        role: "Admin",
      },
      {
        id: 2,
        name: "Rahul Sharma",
        email: "rahul@gmail.com",
        phone: "9876543211",
        role: "Teacher",
      },
      {
        id: 3,
        name: "Priya Singh",
        email: "priya@gmail.com",
        phone: "9876543212",
        role: "Student",
      },
    ];

    setUsers(dummyUsers);

    // Example API
    // axios.get("http://localhost:5000/users")
    // .then((res)=>setUsers(res.data))
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));

      // axios.delete(`http://localhost:5000/delete/${id}`)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-6">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            User Management
          </h1>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg">
            + Add User
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">

            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3 border">ID</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr
                    key={user.id}
                    className="text-center hover:bg-gray-100"
                  >
                    <td className="border p-3">{user.id}</td>
                    <td className="border p-3">{user.name}</td>
                    <td className="border p-3">{user.email}</td>
                    <td className="border p-3">{user.phone}</td>
                    <td className="border p-3">{user.role}</td>

                    <td className="border p-3">
                      <div className="flex justify-center gap-2">

                        <button
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                        >
                          View
                        </button>

                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteUser(user.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-5 text-gray-500"
                  >
                    No Users Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default ViewUser;