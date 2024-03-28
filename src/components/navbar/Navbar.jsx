import Link from "next/link";
import styles from "./index.module.css";

const Navbar = ({ children }) => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.links}>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Navbar;
