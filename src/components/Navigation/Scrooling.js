import React from "react";
import styled from "./scrooling.module.css";
import { FaCircle } from "react-icons/fa";

export default function Scrooling() {
  return (
    <div className={styled.scrooling}>
      <ul>
        <li>
          <FaCircle />
        </li>
        <li>
          <FaCircle />
        </li>
        <li>
          <FaCircle />
        </li>
      </ul>
    </div>
  );
}
