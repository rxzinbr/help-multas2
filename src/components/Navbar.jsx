import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar({ brand, links }) {
  return (
    <nav className={styles.nav}>
      <h2>{brand}</h2>

      <ul>
        {links.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
