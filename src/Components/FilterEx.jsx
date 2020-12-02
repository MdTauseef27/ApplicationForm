import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const FilterEx = () => {
  const [showAll, setShowAll] = useState([
    {
      name: "Banko",
      origin: "Ethiopia",
      price: 16,
    },
    {
      name: "Pueblo",
      origin: "Costa Rica",
      price: 14,
    },
    {
      name: "Don Pablo",
      origin: "Columbia",
      price: 13,
    },
    {
      name: "Hava Lama",
      origin: "Columbia",
      price: 15,
    },
    {
      name: "Guillermo Salva",
      origin: "Ethiopia",
      price: 19,
    },
    {
      name: "Salla Rosa",
      origin: "Kenya",
      price: 20,
    },
    {
      name: "Santor Gustavio",
      origin: "Panama",
      price: 25,
    },
  ]);
  const [filteredCoffee, setFilteredCoffee] = useState();
  useEffect(() => {
    setFilteredCoffee(showAll);
  }, [showAll]);

  console.log("CoffeesDatasss123===>", filteredCoffee);

  const handleClick = (e) => {
    const byorigin = e.target.value;
    if (e.target.value === "all") {
      filteredCoffee = setShowAll;
    } else {
      filteredCoffee = setFilteredCoffee.filter(
        (setFilteredCoffee) => setFilteredCoffee.origin === byorigin
      );
    }
    setShowAll({ filteredCoffee: filteredCoffee });
  };

  const showmethod = () => {
    const showmethod = showAll.filteredCoffee.map((coffee) => (
      <li key={coffee.name}>{coffee.name}</li>
    ));
  };

  return (
    <div>
      <p>hiiiiiiiiiiiii</p>
      <button value="all" onClick={handleClick}>
        All
      </button>
      <button value="Ethiopia" onClick={handleClick}>
        Ethiopia
      </button>
      <button value="Costa Rica " onClick={handleClick}>
        Costa Rica
      </button>
      <button></button>
      {/*
      <button value="Kenya" onClick={handleClick}>
        Kenya
      </button>
      <button value="Columbia" onClick={handleClick}>
        Columbia
      </button>
      <button value="Panama" onClick={handleClick}>
        Panama
      </button>

      <p>Coffee: {showmethod}</p>  */}
    </div>
  );
};
