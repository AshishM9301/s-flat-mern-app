import "./App.css";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import { useMeMutation } from "./store/services/authApi";

function App() {
  return (
    <AuthProvider>
      <Navbar />
    </AuthProvider>
  );
}

export default App;
