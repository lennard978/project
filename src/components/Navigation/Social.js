import React from "react";
import styled from "./social.module.css";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Social() {
  return (
    <div className={styled.social}>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lennard-k%C3%B6llner-101a51b7/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lennard-k%C3%B6llner-101a51b7/"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lennard-k%C3%B6llner-101a51b7/"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
