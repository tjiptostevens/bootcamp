import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./website/navbar";
import Home from "./website/home";

function App() {
  return (
    <>
      <div className="__main">
        <NavBar />
        <Routes>
          <Route key={crypto.randomUUID()} path={""} element={<Home />} />
        </Routes>
        {/* <LmsHome /> */}
        {/* <Login /> */}
        {/* {crypto.randomUUID()} */}
      </div>
    </>
  );
}

export default App;
