import { useEffect, useState } from "react";
import { getTasks } from "../api/fakeApi";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = getTasks();
    setTasks(data);
  }, []);

  const completed = tasks.filter(t => t.status === "completed").length;
  const pending = tasks.filter(t => t.status === "pending").length;
  const progress = tasks.length ? Math.round((completed / tasks.length) * 100) : 0;

  return (

    <div className="min-h-screen bg-linear-to-br from-purple-200 via-white to-indigo-200 p-6 md:p-10">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h1 className="text-3xl md:text-4xl font-bold mb-10 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Dashboard
        </h1>

        {/* Stats Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition hover:-translate-y-1">

            <p className="text-gray-500 text-sm">
              Total Tasks
            </p>

            <h2 className="text-3xl font-bold text-indigo-600 mt-2">
              {tasks.length}
            </h2>

          </div>


          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition hover:-translate-y-1">

            <p className="text-gray-500 text-sm">
              Pending Tasks
            </p>

            <h2 className="text-3xl font-bold text-yellow-500 mt-2">
              {pending}
            </h2>

          </div>


          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition hover:-translate-y-1">

            <p className="text-gray-500 text-sm">
              Completed Tasks
            </p>

            <h2 className="text-3xl font-bold text-green-500 mt-2">
              {completed}
            </h2>

          </div>

        </div>


        {/* Progress Section */}

        <div className="bg-white rounded-xl shadow-md p-6 mb-10">

          <h2 className="text-lg font-semibold mb-4">
            Task Progress
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div
              className="bg-linear-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />

          </div>

          <p className="text-sm text-gray-500 mt-2">
            {progress}% tasks completed
          </p>

        </div>


        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-xl font-semibold mb-5">
            Recent Tasks
          </h2>

          {tasks.length === 0 ? (

            <p className="text-gray-500">
              No tasks yet 🚀
            </p>

          ) : (

            <div className="space-y-4">

              {tasks.slice(0,5).map((task) => (

                <div
                  key={task.id}
                  className="flex justify-between items-center border-b pb-3 hover:bg-gray-50 px-2 rounded transition"
                >

                  <span
                    className={`font-medium ${
                      task.status === "completed"
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {task.title}
                  </span>

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

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;