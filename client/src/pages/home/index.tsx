import { Card, Navbar } from '../../components';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
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
