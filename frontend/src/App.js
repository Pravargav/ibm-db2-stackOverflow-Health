import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Admin from "./pages/Login/Admin";
import Patient from "./pages/Login/Patient";
import Doctor from "./pages/Login/Doctor";
import Patientx from "./pages/Register/Patientx";
import Doctorx from "./pages/Register/Doctorx";
import Patientprofile from "./pages/Myprofile/Patient";
import Doctorprofile from "./pages/Myprofile/Doctor";
import { createContext, useState } from "react";
import StackExchangeHome from "./pages/StackExchangeHome";

import { useGetDoctorId } from "./Iddoctor";
import { useGetPatientId } from "./Idpatient";
import { useGetUserType } from "./userType";
import { useGetUserMail } from "./userMail";
import RefQn from "./pages/Questions/Answers/RefQn";
import RefAnsws from "./pages/Questions/RefAnsws";

export const Appcontext = createContext();

function App() {
  const [refqnid, setRefqnid] = useState("refqnId");
  const [refansid, setRefansid] = useState("refansId");

  let patientId = useGetPatientId();
  let doctorId = useGetDoctorId();

  let userType = useGetUserType();
  let userMail = useGetUserMail();

  return (
    <div>
      <Appcontext.Provider
        value={{
          userType,
          userMail,
          patientId,
          doctorId,

          refqnid,
          setRefqnid,
          refansid,
          setRefansid,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-admin" element={<Admin />} />
            <Route path="/login-patient" element={<Patient />} />
            <Route path="/login-doctor" element={<Doctor />} />
            <Route path="/signup-patient" element={<Patientx />} />
            <Route path="/signup-doctor" element={<Doctorx />} />
            <Route path="/patientProfile" element={<Patientprofile />} />
            <Route path="/doctorProfile" element={<Doctorprofile />} />
            <Route path="/stackExchange" element={<StackExchangeHome />} />
            <Route path="/stackExchange/refQn" element={<RefQn />} />
            <Route path="/stackExchange/refAns" element={<RefAnsws />} />
          </Routes>
        </BrowserRouter>
      </Appcontext.Provider>
    </div>
  );
}

export default App;
