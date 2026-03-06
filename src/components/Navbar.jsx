import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
   const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-xl font-bold">
        Task Tracker
      </h1>

      <div className="flex gap-6 items-center">

        {/* Navigation Links */}
        {currentUser && (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>

            <Link to="/tasks" className="hover:text-gray-300">
              Tasks
            </Link>

         <span className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold uppercase">
  {currentUser.username
    ? currentUser.username.charAt(0)
    : currentUser.email.charAt(0)}
</span>
          </>
        )}

        {/* Login / Logout Button */}
          
        {currentUser ? (
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


// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const navigate = useNavigate();
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("currentUser");
//     navigate("/login");
//   };

//   return (
//     <nav className="w-full bg-slate-900 shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
//       <div className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => navigate("/dashboard")}>
//         TaskManager
//       </div>
//       <div className="flex items-center gap-4">
//         {currentUser && (
//           <>
//             <span className="text-white font-large">{currentUser.username || currentUser.email}</span>
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;