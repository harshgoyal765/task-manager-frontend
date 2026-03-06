import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask, updateTask } from "../api/fakeApi";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = () => {
    const data = getTasks();
    setTasks(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {

      const updated = {
        ...editingTask,
        title
      };

      updateTask(updated);
      setEditingTask(null);

    } else {

      createTask({
        title,
        status: "pending"
      });

    }

    setTitle("");
    loadTasks();
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setTitle(task.title);
  };

  const handleDelete = (id) => {
    deleteTask(id);
    loadTasks();
  };

  const toggleStatus = (task) => {

    const updated = {
      ...task,
      status: task.status === "pending" ? "completed" : "pending"
    };

    updateTask(updated);
    loadTasks();
  };

  return (

    <div className="min-h-screen bg-linear-to-br from-purple-200 via-white to-indigo-200 py-12 display-flex items-center justify-center">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8 bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Task Manager
        </h2>

     

        <form onSubmit={handleSubmit} className="flex gap-3 mb-8">

          <input
            type="text"
            placeholder="Write your next task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <button className="px-6 py-3 rounded-lg text-white font-medium bg-linear-to-r from-indigo-500 to-purple-500 hover:scale-105 transition cursor-pointer">
            {editingTask ? "Update" : "Add"}
          </button>

        </form>

        <div className="space-y-4">

          {tasks.length === 0 && (

            <p className="text-center text-gray-500">
              No tasks yet 🚀 Add your first task
            </p>

          )}

          {tasks.map((task) => (

            <div
              key={task.id}
              className="flex justify-between items-center border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition"
            >

              <div>

                <p
                  className={`font-semibold ${
                    task.status === "completed"
                      ? "line-through text-gray-400"
                      : "text-gray-800"
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

              <div className="flex gap-2">

                <button
                  onClick={() => toggleStatus(task)}
                  className={`px-3 py-1 rounded-md text-sm text-white cursor-pointer ${
                    task.status === "completed"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-indigo-500 hover:bg-indigo-600"
                  }`}
                >
                  {task.status === "completed" ? "Completed" : "Mark Done"}
                </button>

                <button
                  onClick={() => handleEdit(task)}
                  className="px-3 py-1 rounded-md text-sm cursor-pointer text-white bg-yellow-500 hover:bg-yellow-600"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-3 py-1 rounded-md text-sm cursor-pointer text-white bg-red-500 hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

export default Tasks;