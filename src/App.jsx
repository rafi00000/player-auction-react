import { useState } from "react";
import "./App.css";
import Actors from "./components/Actors/Actors";
import Cart from "./components/cart/Cart";

function App() {

  const [cart, setCart] = useState([]);
  const handleCart = (actor) => {
    const isExit = cart.find((item) => item.id === actor.id);
    if(!isExit){
      const newCart = [...cart, actor];
      setCart(newCart);
    }
    else{
      alert('Already Booked')
    }
  };
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Team Avenger</h1>
      <div className="flex">
        <Actors handleCart={handleCart}></Actors>
        <Cart item={cart}></Cart>
      </div>
    </>
  );
}

export default App;
