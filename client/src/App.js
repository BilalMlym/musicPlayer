import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Home, Dashboard } from "./components/index";
import { useState } from "react";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { AnimatePresence } from "framer-motion";
import { validateUser } from "./api";
import { useStateValue } from "./Context/StateProvider";
import { actionType } from "./Context/reducer";



const App = () => {
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();

  const [{user}, dispatch] = useStateValue();
  

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          validateUser(token).then((data) => {
            dispatch({
              type: actionType.SET_USER,
              user: data
            })
          });
        });
      } else {
        setAuth(false);
        dispatch({
          type: actionType.SET_USER,
          user: null
        })
        window.localStorage.setItem("auth", "false");
        
        navigate("/Login");
      }
    });
  }, []);

  return (
    <AnimatePresence>
      <div className="h-auto flex items-center justify-center min-w-[680px]">
        <Routes>
          <Route path="/Login" element={<Login setAuth={setAuth} />} />
          <Route path="/*" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
        
      </div>
    </AnimatePresence>
  );
};

export default App;
