import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Home } from "./components/index"
import { useState } from "react";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";

const App = () => {

  const firebaseAuth = getAuth(app)
  const navigate = useNavigate()
  
  const [auth, setauth] = useState(false ||  window.localStorage.getItem("auth") === "true")

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      console.log(userCred)
    })
  },[])

  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/*" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
