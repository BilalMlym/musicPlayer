import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Home } from "./components/index";
import { useState } from "react";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import {AnimatePresence} from "framer-motion"

const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          console.log(token);
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        navigate("/Login");
      }
    });
  }, []);

  return (
      <AnimatePresence>
        <div className="h-auto flex items-center justify-center min-w-[680px]">
          
          <Routes>
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/*" element={<Home />} />
           
          </Routes>
  
          
        </div>
      </AnimatePresence>
    );
  }

export default App;
