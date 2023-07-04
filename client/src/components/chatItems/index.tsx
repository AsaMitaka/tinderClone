import styles from './chatitems.module.scss';

const ChatItems = () => {
  return (
    <div className={styles.chatItems}>
      <img src="https://wojakparadise.net/wojak/5756/img" alt="" className={styles.chatItemsImg} />
      <div className={styles.chatItemsBlock}>
        <p className={styles.chatItemsBlockHeader}>Name</p>
        <p>Message</p>
      </div>
    </div>
  );
};

export default ChatItems;
