import { useState } from "react";
import { registerUser } from "../api/fakeApi";
import { useNavigate } from "react-router-dom";

function Register() {

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
      registerUser(form);
      alert("Registered Successfully");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex justify-center mt-20">

      <form onSubmit={submit} className="p-6 shadow-lg w-96 rounded-lg">

        <h2 className="text-2xl mb-4 font-bold">Register</h2>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <button className="bg-blue-600 text-white w-full p-2 rounded">
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;