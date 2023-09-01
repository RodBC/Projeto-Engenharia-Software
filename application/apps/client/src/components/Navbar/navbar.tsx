import "./style.css";
import { useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

export function Navbar() {

	const navRef = useRef<HTMLDivElement>(null)
	const url = "http://via.placeholder.com/50"

	const showNavbar = () => {
		if (navRef.current){
			navRef.current.classList.toggle("responsive_nav");
		}
	};

	return (
		<header>
			<h3>LOGO</h3>
			<div className="box_Input">
				<input type="text"  placeholder="Pesquisar..." id="input"/>
				<div className="btn_Search">
					<FaSearch/>
				</div>
			</div>
			<nav ref={navRef} style={{'zIndex': '99999'}}>

				<a href="/home">Início</a>

				<a href="/about">Sobre</a>

				<a href="/contacts">Contatos</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			<img src={url} className="image"/>
		</header>
	);
}
