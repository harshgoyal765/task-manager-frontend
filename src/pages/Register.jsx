import { useState } from "react";
import { registerUser } from "../api/fakeApi";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

function Register() {
  const navigate = useNavigate();

  // Define fields dynamically
  const fields = [
    { name: "username", type: "text", placeholder: "Username", icon: User, required: true },
    { name: "email", type: "email", placeholder: "Email address", icon: Mail, required: true },
    { name: "password", type: "password", placeholder: "Password", icon: Lock, required: true },
  ];

  // Initialize form state
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    try {
      registerUser(form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  const styles = {
    container: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-white to-indigo-400 px-4",
    card: "bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transition hover:scale-[1.01]",
    title: "text-3xl font-bold text-center mb-6 text-gray-800",
    subtitle: "text-center text-gray-500 mb-6",
    inputWrapper: "relative mb-4",
    input: "border border-gray-300 w-full pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",
    button: "w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition text-white py-2 rounded-lg font-semibold shadow-md",
    bottomText: "text-sm text-center text-gray-500 mt-5",
    link: "text-indigo-600 cursor-pointer hover:underline",
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submit} className={styles.card}>
        <h2 className={styles.title}>Create Account ✨</h2>
        <p className={styles.subtitle}>Register to start managing your tasks</p>

        {/* Dynamic input fields */}
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.name} className={styles.inputWrapper}>
              {Icon && <Icon className="absolute left-3 top-3 text-gray-400" size={18} />}
              <input
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                onChange={handleChange}
                required={field.required}
                className={styles.input}
              />
            </div>
          );
        })}

        <button className={styles.button}>Register</button>

        <p className={styles.bottomText}>
          Already have an account?{" "}
          <span className={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;