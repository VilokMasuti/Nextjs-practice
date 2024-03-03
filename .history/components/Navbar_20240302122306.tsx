import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.nav}>
      <nav className={styles.links}>
        <p> next js</p>
        <u className={styles.links}>
          <Link href="/">
            <li> Home </li>
          </Link>
          <Link href="/about">
            <li> About</li>
          </Link>
          <Link href="/contact">
            <li> Contact</li>
          </Link>
        </u>
      </nav>
    </header>
  );
};

export default Navbar;
