import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}>
      </Routes>
    </div>
  );
}

export default App;
