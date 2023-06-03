import "./App.css";
import Appointment from "./components/Appointment";
import Clinics from "./components/Clinics";
import Doctors from "./components/Doctors";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Navbartop from "./components/Navbartop";
import { Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Footbar from "./components/Footbar";
import About from "./components/About";
import Appointmentslist from "./components/Appointmentslist";
import Publications from "./components/Publications";
import Teachings from "./components/Teachings";
import { useAuthContext } from "./hooks/useAuthContext";
import Records from "./components/Records";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <div className="row">
        <Navbartop />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/research" element={<Publications />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route
          path="/appointment"
          element={user ? <Appointment /> : <LoginPage />}
        />
        <Route
          path="/login"
          element={!user ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route path="/records" element={<Records />} />

        <Route
          path="/signup"
          element={!user ? <SignupPage /> : <Navigate to="/" />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/appts"
          element={user ? <Appointmentslist /> : <LoginPage />}
        />
      </Routes>

      <div className="row">
        <Footbar />
      </div>
    </>
  );
}

export default App;
