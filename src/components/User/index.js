import React from "react";
import s from "./style.module.css"

export default function User({title, gender, avatar}) {
  return (
    <div className={s.card}>
      <p>{title}</p>
      <img src={avatar} className={s.img} alt="" />
      <p>{gender}</p>
    </div>
  );
}
