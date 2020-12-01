import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const FilterEx = () => {
  const [selectedCategory, setSelectedCategory] = useState("1");
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
  const categories = [
    { label: "React Features", value: 1 },
    { label: ".Net Features", value: 2 },
    { label: "Python Features", value: 3 },
    { label: "C++ Features", value: 3 },
  ];
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const filtered = showAll.filter(
      (item) => item.category == selectedCategory.value
    );
    setFilteredData(filtered);
  }, [selectedCategory]);
  console.log("filtered", filteredData);

  //   useEffect(()=>{
  //     console.log("Selected Categor::",selectedCategory.value, "---", rowdata);
  //     // setFilteredData(rowdata);
  //     const filtered = rowdata.filter(item=> item.category == selectedCategory.value);
  //     console.log("filteredData====>", filtered);
  //     setFilteredData(filtered);
  // },[selectedCategory]);

  return (
    <div>
      <p>hiiiiiiiiiiiii</p>
      <button value="all" onClick={(e) => setSelectedCategory(filteredData)}>
        All
      </button>
      {/* <button value="Ethiopia" onClick={handleClick}>
        Ethiopia
      </button>
      <button value="Costa Rica" onClick={handleClick}>
        Costa Rica
      </button>
      <button value="Kenya" onClick={handleClick}>
        Kenya
      </button>
      <button value="Columbia" onClick={handleClick}>
        Columbia
      </button>
      <button value="Panama" onClick={handleClick}>
        Panama
      </button>

      <p>Coffee: {showmethod}</p> */}
    </div>
  );
};
