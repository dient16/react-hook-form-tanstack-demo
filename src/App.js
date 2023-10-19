import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
const App = () => {
  return (
    <div className="app">
      <h2>React hook form + TanStack</h2>
      <Login />
    </div>
  );
};

export default App;
