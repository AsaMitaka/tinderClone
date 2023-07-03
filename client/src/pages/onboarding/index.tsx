import styles from './onboarding.module.scss';

const Onboarding = () => {
  return (
    <div className={styles.onboardingContainer}>
      <div className={styles.onboardingBlock}>
        <h2>Create Account</h2>
        <div className={styles.blockRow}>
          <label htmlFor="name" className={styles.inputLabel}>
            Name:
            <input type="text" name="name" />
          </label>
          <label htmlFor="surname" className={styles.inputLabel}>
            Surname:
            <input type="text" name="surname" />
          </label>
        </div>
        <div className={styles.blockRow}>Gender</div>
        <div className={styles.blockRow}>
          <label htmlFor="genderMen" className={styles.radioBtn}>
            <input type="radio" name="gender" id="genderMen" />
            <span>Men</span>
          </label>
          <label htmlFor="genderWoman" className={styles.radioBtn}>
            <input type="radio" name="gender" id="genderWoman" />
            <span>Woman</span>
          </label>
          <label htmlFor="genderMore" className={styles.radioBtn}>
            <input type="radio" name="gender" id="genderMore" />
            <span>More</span>
          </label>
        </div>
        <div className={styles.blockRow}>Show Me</div>
        <div className={styles.blockRow}>
          <label htmlFor="showMeMan" className={styles.radioBtn}>
            <input type="radio" name="showme" id="showMeMan" />
            <span>Man</span>
          </label>
          <label htmlFor="showMeWoman" className={styles.radioBtn}>
            <input type="radio" name="showme" id="showMeWoman" />
            <span>Woman</span>
          </label>
          <label htmlFor="showMeMore" className={styles.radioBtn}>
            <input type="radio" name="showme" id="showMeEveryone" />
            <span>Everyone</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
