import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
			<h3>La librerie</h3>
			<nav ref={navRef}>
				<a href="/#">Categories</a>
				<a href="/#">Meilleurs Ventes</a>
				<a href="/#">Nouveautés</a>
				<a href="/#">Se connecter </a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
