import React from "react";
import style from "../style/headerDropdown.module.css";

export default function SearchDropdown() {
  return (
    <div className={style.SearchDropdown}>
      <div>
        <div className={style.cityIcon}>
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <p>Rochester, New York</p>
      </div>
      <div>
        <div className={style.cityIcon}>
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <p>Reno, Nevada</p>
      </div>
      <div>
        <div className={style.cityIcon}>
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <p>Stockton, California</p>
      </div>
    </div>
  );
}
