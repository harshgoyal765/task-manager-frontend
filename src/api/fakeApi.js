export const registerUser = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const exists = users.find((u) => u.email === data.email);
  if (exists) throw new Error("User already exists");
  const role = data.role || "user";
  users.push({ ...data, role });
  localStorage.setItem("users", JSON.stringify(users));
  return { message: "Registered Successfully" };
};

export const loginUser = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u=>u.email===data.email && u.password===data.password);
  if(!user) throw new Error("Invalid credentials");
  localStorage.setItem("token","demo-token");
  localStorage.setItem("currentUser",JSON.stringify(user));
  return user;
};

export const getTasks = ()=> JSON.parse(localStorage.getItem("tasks")) || [];

export const createTask = (task) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const newTask = {
    id: Date.now(),
    status: "pending", // ✅ default status
    ...task,
  };

  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  return newTask;
};

export const deleteTask = (id)=>{
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t=>t.id!==id);
  localStorage.setItem("tasks",JSON.stringify(tasks));
};

export const updateTask = (updatedTask, markAsDone = false) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const newTasks = tasks.map((task) => {
    if (task.id === updatedTask.id) {
      return {
        ...task,
        title: updatedTask.title,
        description: updatedTask.description,
        status: markAsDone ? "completed" : "pending", // edit -> pending, mark done -> completed
      };
    }
    return task;
  });

  localStorage.setItem("tasks", JSON.stringify(newTasks));
  return updatedTask;
};