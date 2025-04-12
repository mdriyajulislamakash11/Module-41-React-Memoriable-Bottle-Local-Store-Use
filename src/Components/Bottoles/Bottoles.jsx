import React, { useEffect, useState } from "react";
import Bottole from "../Bottole/Bottole";
import "./Bottoles.css";
import { addToLS, getStoreCart, removeFromLS } from "../../utilites/localStorage";
import Cart from "../Cart/Cart";

const Bottoles = () => {
  const [bottoles, setBottoles] = useState([]);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("bottoles.json")
      .then((res) => res.json())
      .then((data) => setBottoles(data));
  }, []);

  useEffect(() => {
    if (bottoles.length > 0) {
      const storedCard = getStoreCart();
      console.log(storedCard, bottoles);

      const saveCart = [];
      for (const id of storedCard) {
        const bottles = bottoles.find((bottole) => bottole.id === id);
        if (bottles) {
          saveCart.push(bottles);
        }
      }
      console.log(saveCart);
      setCard(saveCart)
    }
  }, [bottoles]);

  const handleAddToCard = (bottole) => {
    const newCard = [...card, bottole];
    setCard(newCard);
    addToLS(bottole.id);
  };

  // remove LS Cart
  const hanleRemove = (id) => {
    // Visual Cart Remove
    const remaining = card.filter((idx) => idx.id !== id);
    setCard(remaining)
    // Remove from Ls
    removeFromLS(id)
  }


  return (
    <div>
      <h2>Bottole Here: {bottoles?.length}</h2>

      {
        <Cart cart={card} hanleRemove={hanleRemove}></Cart>
      }

      <div className="bottole-container">
        {bottoles.map((bottole) => (
          <Bottole
            bottole={bottole}
            key={bottole.id}
            handleAddToCard={handleAddToCard}
          ></Bottole>
        ))}
      </div>
    </div>
  );
};

export default Bottoles;
