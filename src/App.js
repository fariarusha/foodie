import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const onOpenCartHandler = () => {
    setShowCartModal(true);
  };
  const onCloseCartHandler = () => {
    setShowCartModal(false);
  };
  return (
    <CartProvider>
      {showCartModal && <Cart onClose={onCloseCartHandler}/>}
      <Header onShowCart={onOpenCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
