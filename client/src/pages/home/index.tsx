import { Card, Navbar } from '../../components';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar>
        <div className={styles.asideBlockHeader}>
          <ul className={styles.asideList}>
            <li className={styles.asideListBtn}>Couples</li>
            <li className={styles.asideListActiveBtn}>Notification</li>
          </ul>
        </div>
        <div className={styles.asideBlockMain}></div>
      </Navbar>
      <section className={styles.homeSection}>
        <h1>Home</h1>
        <div className={styles.homeBlock}>
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Home;
