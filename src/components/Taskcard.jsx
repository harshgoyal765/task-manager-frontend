function TaskCard({ task, onDelete, onEdit }) {

  return (
    <div className="border p-4 rounded shadow">

      <h3 className="font-bold">{task.title}</h3>

      <p>{task.description}</p>

      <p className="text-sm text-gray-500">
        Status: {task.status}
      </p>

      <div className="flex gap-2 mt-2">

        <button
          onClick={() => onEdit(task._id)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default TaskCard;