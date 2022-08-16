import React from "react";
import style from "../style/headerDropdown.module.css";

export default function HeaderDropdown() {
  return (
    <div className={style.HeaderDropdown}>
      <div className={style.city}>
        <img src="/images/location.png" alt="" />
        <p>Explore nearby destinations</p>
      </div>
      <h6>GETAWAYS NEAR YOU</h6>
      <div className={style.city}>
        <img src="/images/grazuha.png" alt="" />
        <div>
          <p>Grazuha</p>
          <span>2 hour drive</span>
        </div>
      </div>
      <div className={style.city}>
        <img src="/images/dabin.png" alt="" />
        <div>
          <p>Dabin</p>
          <span>3 hour drive</span>
        </div>
      </div>
      <div className={style.city}>
        <img src="/images/hudareaw.png" alt="" />
        <div>
          <p>Hudareaw</p>
          <span>4 hour drive</span>
        </div>
      </div>
    </div>
  );
}
