import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
  );
}

export default App;
