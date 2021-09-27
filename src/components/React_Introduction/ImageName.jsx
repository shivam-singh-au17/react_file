import React from "react";

export default function ImageName() {
  const arrData = [
    {
      img: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      name: "Item_01",
    },
    {
      img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      name: "Item_02",
    },
    {
      img: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
      name: "Item_03",
    },
    {
      img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      name: "Item_04",
    },
  ];
  return (
    <div className="App" style={{ display: "flex" }}>
      {arrData.map((item) => {
        return (
          <>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
          </>
        );
      })}
    </div>
  );
}
