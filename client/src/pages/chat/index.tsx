import { Navbar } from '../../components';
import styles from './chat.module.scss';

const Chat = () => {
  return (
    <div className={styles.chat}>
      <Navbar />
      <section className={styles.chatSection}>
        <div className={styles.chatHeader}>Name, age</div>
        <div className={styles.chatBlock}>
          <div className={styles.msgBlock}>
            <img src="https://wojakparadise.net/wojak/5756/img" alt="" className={styles.msgImg} />
            <p className={styles.msg}>A</p>
          </div>
          <div className={styles.myMsg}>B</div>
          <div className={styles.msgBlock}>
            <img src="https://wojakparadise.net/wojak/5756/img" alt="" className={styles.msgImg} />
            <p className={styles.msg}>A</p>
          </div>
          <div className={styles.msgBlock}>
            <img src="https://wojakparadise.net/wojak/5756/img" alt="" className={styles.msgImg} />
            <p className={styles.msg}>A</p>
          </div>
          <div className={styles.myMsg}>B</div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
