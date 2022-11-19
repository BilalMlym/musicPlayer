import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home } from "./components/index"

const App = () => {
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
