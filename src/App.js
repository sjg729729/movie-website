import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";
import "./styles.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<h1>Hello!!</h1>} />
      <Route path="/movie/:id" element={<Detail />}></Route>
    </Routes>
  );
}

export default App;
