import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./assets/css/other.css";
import "./assets/css/animation.css";
import NavBar from "./website/navbar";
import Home from "./website/home";

function App() {
  return (
    <>
      <div className="__main">
        <div
          className="__ball"
          style={{
            "--ballsize": "300px",
            "--ballcolor": "#354AE6",
            "--ballx": Math.ceil(Math.random() * 100) + "%",
            "--bally": Math.ceil(Math.random() * 100) + "vh",
          }}
        ></div>
        <div
          className="__ball"
          style={{
            "--ballsize": "600px",
            "--ballcolor": "#0FE3CA",
            "--ballx": Math.ceil(Math.random() * 100) + "%",
            "--bally": Math.ceil(Math.random() * 100) + "vh",
          }}
        ></div>
        <div
          className="__ball"
          style={{
            "--ballsize": "400px",
            "--ballcolor": "#354AE6",
            "--ballx": Math.ceil(Math.random() * 100) + "%",
            "--bally": Math.ceil(Math.random() * 100) + "vh",
          }}
        ></div>
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
