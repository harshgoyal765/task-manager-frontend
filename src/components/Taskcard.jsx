function TaskCard({ task, onDelete, onEdit }) {

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-300",
    "in-progress": "bg-blue-100 text-blue-700 border-blue-300",
    completed: "bg-green-100 text-green-700 border-green-300"
  };

  return (
    <div className={`border p-5 rounded-xl shadow-sm hover:shadow-md transition ${statusStyles[task.status]}`}>

      <h3 className="font-bold text-lg mb-1">
        {task.title}
      </h3>

      <p className="text-gray-600 mb-2">
        {task.description}
      </p>

      <span className="text-sm font-medium">
        Status: {task.status}
      </span>

      <div className="flex gap-3 mt-4">

        <button
          onClick={() => onEdit(task._id)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;