import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar"> 
       <Link to="/" className="navbar-menu">Home</Link>
      <Link to="/contact" className="navbar-menu">Contact</Link>
      <Link to="/about" className="navbar-menu">About</Link>
       </div>
  )

}

export default Navbar