import { Link } from 'react-router-dom';
import styles from './welcome.module.scss';

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <header className={styles.header}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerNavList}>
            <Link to="/welcome" className={styles.navLogo}>
              Tinder
            </Link>
            <Link to="/login" className={styles.navBtn}>
              Login
            </Link>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <p className={styles.mainHeader}>TINDER</p>
        <Link to="/signup" className={styles.mainBtn}>
          Create Account
        </Link>
      </main>
      <footer className={styles.footer}>
        <a href="github.com/asamitaka" className={styles.footerLink}>
          G
        </a>
      </footer>
    </div>
  );
};

export default Welcome;
