import { useState, useContext } from "react";
import { loginUser } from "../api/fakeApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

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
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center mt-20">

      <form onSubmit={submit} className="p-6 shadow-lg w-96 rounded-lg">

        <h2 className="text-2xl mb-4 font-bold">Login</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
        />

        <button className="bg-green-600 text-white w-full p-2 rounded">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;