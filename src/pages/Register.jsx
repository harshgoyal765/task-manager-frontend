import { useState } from "react";
import { registerUser } from "../api/fakeApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "user" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!form.username) newErrors.username = "Username required";
    if (!form.email) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.password) newErrors.password = "Password required";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      registerUser(form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-white to-indigo-400 px-4">
      <form className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md" onSubmit={submit}>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>

        <div className="mb-4">
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <div className="mb-4">
          <input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        <div className="mb-6">
          <select name="role" onChange={handleChange} className="border border-gray-300 w-full p-2 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition text-white py-2 rounded-lg font-semibold shadow-md">
          Register
        </button>

        <p className="text-sm text-center text-gray-500 mt-5">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-indigo-600 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Register;