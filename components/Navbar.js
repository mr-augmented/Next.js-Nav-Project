import Link from "next/link";
import styles from "../styles/navbar.module.css";

function Navbar() {
  return (
    // Add the 'navbar' class from the imported CSS module
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
