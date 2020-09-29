import React, { useState } from "react";
import styled from "./navigation.module.css";
import { Link } from "react-router-dom";
import MenuBtn from "./MenuBtn";
import Social from "./Social";
import Scrooling from "./Scrooling";

export default function Navigation() {
	return (
		<>
			<div className={styled.navigation}>
				<nav>
					<div className={styled.logo}>Logo</div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
			<MenuBtn />
			<Social />
			<Scrooling />
		</>
	);
}
