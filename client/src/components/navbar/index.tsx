import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = ({ children }) => {
  return (
    <aside className={styles.aside}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <Link to="/" className={styles.navbarBtn}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/1/1b/NPC_wojak_meme.png"
              alt=""
              className={styles.navbarImg}
            />
            Name
          </Link>
          <Link to="/chat" className={styles.navbarBtn}>
            Chat
          </Link>
        </ul>
      </nav>
      <div className={styles.asideBlock}>{children}</div>
    </aside>
  );
};

export default Navbar;
