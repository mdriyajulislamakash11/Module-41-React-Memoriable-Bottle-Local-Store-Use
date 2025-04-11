import React, { useEffect, useState } from "react";
import Bottole from "../Bottole/Bottole";
import "./Bottoles.css";

const Bottoles = () => {
  const [bottoles, setBottoles] = useState([]);
  const [card, setCard] = useState([])


  useEffect(() => {
    fetch("bottoles.json")
      .then((res) => res.json())
      .then((data) => setBottoles(data));
  }, []);

  const handleAddToCard = (bottole) => {
    const newCard = [...card, bottole];
    setCard(newCard)
  };

  return (
    <div>
      <h2>Bottole Here: {bottoles?.length}</h2>

      <h3>Card : {card.length}</h3>

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
