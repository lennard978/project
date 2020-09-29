import React from "react";
import BurgerBtn from "./BurgerBtn";
import styled from "./menuBtn.module.css";

export default function MenuBtn() {
  return (
    <>
      <div className={styled.menuBtn}>
        <BurgerBtn />
      </div>
    </>
  );
}
