import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Task Tracker
      </h1>

      <div className="flex gap-6 items-center">

        {/* Navigation Links */}
        {user && (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>

            <Link to="/tasks" className="hover:text-gray-300">
              Tasks
            </Link>
          </>
        )}

        {/* Login / Logout Button */}

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded cursor-pointer hover:bg-red-700"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 px-3 py-1 rounded cursor-pointer hover:bg-green-400"
          >
            Login
          </Link>
        )}

      </div>

    </div>
  );
}

export default Navbar;