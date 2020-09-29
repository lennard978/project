import React from "react";
import styled from "./burgerBtn.module.css";
export default function BurgerBtn() {
  return (
    <div className={styled.btn}>
      <div className={styled.line}></div>
      <div className={styled.line}></div>
    </div>
  );
}
