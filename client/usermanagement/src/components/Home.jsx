import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <h1 className="text-4xl text-center font-bold text-blue-600">
        User Management System
      </h1>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Login
        </Link>
        <br />
        <br />
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Register
        </Link>
        <br />
        <br />
        <Link
          to="/createuser"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Create User
        </Link>
        <br />
        <br />
        <Link
          to="/viewuser"
          className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700"
        >
          View Users
        </Link>
      </div>
    </div>
  );
}

export default Home;
