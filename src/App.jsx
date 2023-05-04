import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./website/navbar";
import Hero from "./website/hero";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route key={crypto.randomUUID()} path={""} element={<Hero />} />
      </Routes>
      {crypto.randomUUID()}
    </>
  );
}

export default App;
