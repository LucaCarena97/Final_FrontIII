import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/favs"}>Favorite</Link>
      <Link></Link>
      <button>Theme</button>
    </nav>
  );
}
