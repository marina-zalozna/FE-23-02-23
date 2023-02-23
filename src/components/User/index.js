import React from "react";
import s from "./style.module.css"

export default function User({title, gender}) {
  return (
    <div className={s.card}>
      <p>{title}</p>
      <p>{gender}</p>
    </div>
  );
}
