import { useEffect, useState } from "react";
import { getTasks } from "../api/fakeApi";

function Dashboard() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allTasks = getTasks();
    const displayedTasks =
      currentUser.role === "admin"
        ? allTasks
        : allTasks.filter((t) => t.userEmail === currentUser.email);
    setTasks(displayedTasks);

    if (currentUser.role === "admin") {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      setUsers(allUsers);
    }

    setLoading(false);
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.status === "completed").length;
  const pendingTasks = totalTasks - completedTasks;
  const completionPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-white to-indigo-200 p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Total Tasks</p>
          <p className="text-2xl font-bold text-indigo-600">{totalTasks}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Pending Tasks</p>
          <p className="text-2xl font-bold text-yellow-500">{pendingTasks}</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4 text-center">
          <p className="text-sm text-gray-500">Completed Tasks</p>
          <p className="text-2xl font-bold text-green-500">{completedTasks}</p>
        </div>
      </div>

      {/* Task Progress */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="font-semibold mb-2">Task Progress</h2>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-4 bg-green-500 rounded-full transition-all duration-500"
            style={{ width: `${completionPercent}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-1">{completionPercent}% tasks completed</p>
      </div>

      {/* Recent Tasks */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="font-semibold mb-4">Recent Tasks</h2>
        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center">No tasks yet 🚀</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center border-b border-gray-200 py-2"
              >
                <p
                  className={`${
                    task.status === "completed" ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {task.title}
                </p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {task.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Admin Users */}
      {currentUser.role === "admin" && users.length > 0 && (
        <div className="bg-white shadow rounded-xl p-4 mt-6">
          <h2 className="font-semibold mb-2">All Users</h2>
          <ul className="list-disc pl-5">
            {users.map((u) => (
              <li key={u.email}>
                {u.username || u.email} - {u.role}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;