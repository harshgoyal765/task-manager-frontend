import { useState, useContext } from "react";
import { loginUser } from "../api/fakeApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();

    try {
      const user = loginUser(form);
      login(user);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-white to-indigo-400 px-4">

      
      <form
        onSubmit={submit}
        className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md transition hover:scale-[1.01]"
      >

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to manage your tasks
        </p>

    
        <div className="relative mb-4">

          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />

          <input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
            required
            className="border border-gray-300 w-full pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        
        <div className="relative mb-6">

          <Lock className="absolute left-3 top-3 text-gray-400" size={18} />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className="border border-gray-300 w-full pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

       
        <button
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition text-white py-2 rounded-lg font-semibold shadow-md"
        >
          Login
        </button>

        {/* Bottom text */}
        <p className="text-sm text-center text-gray-500 mt-5">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-indigo-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>

      </form>

    </div>
  );
}

export default Login;