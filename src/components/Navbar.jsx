import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar"; // Importing Search Bar

const Navbar = () => {
    return (
      <nav class="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/drivers">Drivers</Link></li>
          <li><Link to="/circuits">Circuits</Link></li>
          <li><Link to="/stats">Stats</Link></li>
        </ul>
        <SearchBar />
      </nav>
    );
  };
  
  export default Navbar;