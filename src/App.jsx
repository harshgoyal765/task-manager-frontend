
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

      </Routes>
     <Footer/>
    </BrowserRouter>

  );
}

export default App;