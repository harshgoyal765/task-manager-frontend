import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex justify-between p-4 bg-blue-600 text-white">
      <h1 className="font-bold">Task Manager</h1>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;