import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
          <li><Link to="/circuits">Circuits</Link></li>
          <li><Link to="/stats">Stats</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;