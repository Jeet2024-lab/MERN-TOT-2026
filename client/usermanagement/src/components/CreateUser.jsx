import React, { useState } from "react";

function CreateUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Student",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);

    // API Call Example
    // axios.post("http://localhost:5000/createuser", user);

    alert("User Created Successfully!");

    setUser({
      name: "",
      email: "",
      phone: "",
      role: "Student",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 flex justify-center items-center py-10 px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl p-8">

        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-2">
          Create User
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Add a new user to the system
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block font-semibold mb-2">
              User Role
            </label>

            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Create User
            </button>

            <button
              type="reset"
              onClick={() =>
                setUser({
                  name: "",
                  email: "",
                  phone: "",
                  role: "Student",
                  password: "",
                })
              }
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Reset
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default CreateUser;