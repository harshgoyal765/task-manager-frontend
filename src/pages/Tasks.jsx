import { useState, useEffect } from "react";
import { getTasks, createTask, deleteTask } from "../api/fakeApi.js";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {

    setTasks(getTasks());

  }, []);

  const addTask = () => {

    if (!title) return;

    createTask({
      title,
      status: "pending"
    });

    setTasks(getTasks());
    setTitle("");

  };

  const removeTask = (id) => {

    deleteTask(id);

    setTasks(getTasks());

  };

  return (

    <div>

      <div className="mb-4">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="border p-2 mr-2"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add
        </button>

      </div>

      {tasks.map((task) => (

        <div
          key={task.id}
          className="border p-3 mb-2 flex justify-between"
        >

          <span>{task.title}</span>

          <button
            onClick={() => removeTask(task.id)}
            className="text-red-500"
          >
            Delete
          </button>

        </div>

      ))}

    </div>

  );
}

export default Tasks;