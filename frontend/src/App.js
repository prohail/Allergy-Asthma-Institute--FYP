import "./App.css";
import Appointment from "./components/Appointment";
import Clinics from "./components/Clinics";
import Doctors from "./components/Doctors";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import Navbartop from "./components/Navbartop";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import Footbar from "./components/Footbar";
import About from "./components/About";
import Appointmentslist from "./components/Appointmentslist";
import Publications from "./components/Publications";
import Teachings from "./components/Teachings";

function App() {
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
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/appts" element={<Appointmentslist />} />
      </Routes>

      <div className="row">
        <Footbar />
      </div>
    </>
  );
}

export default App;
