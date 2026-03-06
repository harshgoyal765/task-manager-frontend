import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Tasks from "./Tasks";

function Dashboard() {

  const { user, logout } = useContext(AuthContext);

  return (

    <div className="p-8">

      <div className="flex justify-between mb-6">

        <h1 className="text-3xl font-bold">
          Welcome {user?.email}
        </h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Logout
        </button>

      </div>

      <Tasks />

    </div>

  );
}

export default Dashboard;