import React, { useState } from "react";
import style from "../style/location.module.css";

export default function Location() {
  const [data, setData] = useState([
    { image: "grazuha.png", title: "Grazuha", description: "5.5 hour drive" },
    { image: "hudareaw.png", title: "Hudareaw", description: "2.5 hour drive" },
    {
      image: "fatambuha.png",
      title: "Fatambuha Janz",
      description: "2 hour drive",
    },
    { image: "vatia.png", title: "Vatia Hali", description: "3 hour drive" },
    { image: "tritani.png", title: "Tritani", description: "7.5 hour drive" },
    {
      image: "bihujanda.png",
      title: "Bihujanda",
      description: "1.5 hour drive",
    },
    {
      image: "volidasua.png",
      title: "Volidasua",
      description: "5 hour drive",
    },
    { image: "furjon.png", title: "Furjon", description: "3 hour drive" },
  ]);
  return (
    <div className={style.Location}>
      <div className="row m-0" style={{ minWidth: "750px" }}>
        {data.map((item) => (
          <div className="col-3  mb-3">
            <div className={style.LocationCard}>
              <img src={`/images/${item.image}`} alt="" />
              <div>
                <h6>{item.title}</h6>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
