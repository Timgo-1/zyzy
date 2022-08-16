import React, { useState } from "react";
import style from "../style/liveAnyWhere.module.css";

export default function LiveAnywhere() {
  const [data, setData] = useState([
    { image: "chillHome.png", title: "Chill Homes" },
    { image: "dabin.png", title: "Dabins and Cottages" },
    { image: "special.png", title: "Special Stays" },
    { image: "pets.png", title: "Welcome Pets" },
  ]);
  return (
    <div className={style.LiveAnywhere}>
      <h1>Live Anywhere</h1>
      <div style={{ overflow: "auto" }}>
        <div className="row m-0" style={{ minWidth: "750px" }}>
          {data.map((item) => (
            <div className="col-3">
              <div className={style.LiveAnywhereCard}>
                <img src={`/images/${item.image}`} alt="" />
                <h6>{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
