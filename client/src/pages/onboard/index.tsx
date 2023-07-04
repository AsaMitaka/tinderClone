import styles from './onboard.module.scss';

const Onboarding = () => {
  return (
    <div className={styles.onboardContainer}>
      <div className={styles.onboardBlock}>
        <h2>Create Account</h2>
        <div className={styles.blockColumn}>
          <div className={styles.blockRow}>
            <label htmlFor="name" className={styles.inputLabel}>
              Name:
              <input type="text" name="name" className={styles.input} placeholder="name" />
            </label>
            <label htmlFor="surname" className={styles.inputLabel}>
              Surname:
              <input type="text" name="surname" className={styles.input} placeholder="surname" />
            </label>
          </div>
          <div className={styles.blockRow}>Birthday</div>
          <div className={styles.blockRow}>
            <label htmlFor="birthdayDay" className={styles.inputLabel}>
              <input type="number" name="birthdayDay" className={styles.input} placeholder="day" />
            </label>
            <label htmlFor="birthdayMonth" className={styles.inputLabel}>
              <input
                type="number"
                name="birthdayMonth"
                className={styles.input}
                placeholder="month"
              />
            </label>
            <label htmlFor="birthdayYear" className={styles.inputLabel}>
              <input
                type="number"
                name="birthdayYear"
                className={styles.input}
                placeholder="year"
              />
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
          <div className={styles.blockRow}>Show gender on my profile</div>
          <div className={styles.blockRow}>
            <input
              type="checkbox"
              name="showGender"
              id="showGender"
              className={styles.checkboxInput}
            />
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
            <label htmlFor="showMeEveryone" className={styles.radioBtn}>
              <input type="radio" name="showme" id="showMeEveryone" />
              <span>Everyone</span>
            </label>
          </div>
          <div className={styles.blockRow}>About Me</div>
          <div className={styles.blockRow}>
            <input
              type="text"
              name="aboutMe"
              id="aboutMe"
              className={styles.input}
              placeholder="about me"
            />
          </div>
          <div className={styles.blockRow}>Profile Pic</div>
          <div className={styles.blockRow}>
            <input
              type="text"
              name="profilePic"
              id="profilePic"
              className={styles.input}
              placeholder="Profile Picture Url"
            />
          </div>

          <div className={styles.blockRow}>
            <button type="submit" className={styles.onboardBtn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
