export const registerUser = (data) => {

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find((u) => u.email === data.email);

  if (exists) {
    throw new Error("User already exists");
  }

  users.push({ ...data, role: "user" });

  localStorage.setItem("users", JSON.stringify(users));

  return { message: "Registered Successfully" };
};

export const loginUser = (data) => {

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === data.email && u.password === data.password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  localStorage.setItem("token", "demo-token");
  localStorage.setItem("currentUser", JSON.stringify(user));

  return user;
};

export const getTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
};

export const createTask = (task) => {

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const newTask = {
    id: Date.now(),
    ...task
  };

  tasks.push(newTask);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  return newTask;
};

export const deleteTask = (id) => {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const updateTask = (updatedTask) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTasks = tasks.map((task) =>
    task.id === updatedTask.id
      ? { ...updatedTask, status: "uncompleted" } // Reset status
      : task
  );
  localStorage.setItem("tasks", JSON.stringify(newTasks));

  return { ...updatedTask, status: "uncompleted" };
};