import styles from './signup.module.scss';

const Signup = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBlock}>
        <h1>signup</h1>
        <label htmlFor="username" className={styles.signupLabel}>
          <input
            type="text"
            name="username"
            placeholder="username"
            className={styles.signupInput}
          />
        </label>
        <label htmlFor="password" className={styles.signupLabel}>
          <input
            type="password"
            name="password"
            placeholder="password"
            className={styles.signupInput}
          />
        </label>
        <label htmlFor="repassword" className={styles.signupLabel}>
          <input
            type="password"
            name="repassword"
            placeholder="password"
            className={styles.signupInput}
          />
        </label>
        <input type="submit" className={styles.signupBtn} />
      </div>
    </div>
  );
};

export default Signup;
