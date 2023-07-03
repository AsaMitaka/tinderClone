import styles from './card.module.scss';

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <img
        src="https://cdn.vox-cdn.com/thumbor/HPkXlqMe5RMLt_1hSX9LYSF_rXc=/0x0:2040x1360/1000x1429/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/13315879/npcmeme.jpg"
        alt=""
        className={styles.cardImg}
      />
      <div className={styles.cardBlock}>
        <div className={styles.cardInfo}>Name, Age</div>
        <div className={styles.cardBtns}>
          <button className={styles.cardBtn}>D</button>
          <button className={styles.cardBtn}>B</button>
          <button className={styles.cardBtn}>L</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
