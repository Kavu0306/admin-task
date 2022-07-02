import React from "react";
import Users from "./Users";

function Products() {
  let userdata = [
    {
      id: 1,
      title: "iphone",
      image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
      content: "high end product",
    },
    {
      id: 2,
      title: "one plus",
      image: "https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg",
      content: "high end products",
    },
    {
      id: 3,
      title: "samsung",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/51S-5gFoUAL._SX300_SY300_QL70_FMwebp_.jpg",
      content: " mid product",
    },
    {
      id: 4,
      title: "vivo",
      image: "https://www.mantraman.in/wp-content/uploads/2022/03/ESF.jpg",
      content: "mid product",
    },
    {
      id: 5,
      title: "motorolo",
      image: "https://www.addmecart.com/wp-content/uploads/2021/09/p11.1.jpg",
      content: "low to mid product",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {userdata.map((item) => (
            <Users data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
