import styles from './login.module.scss';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBlock}>
        <h1>Login</h1>
        <label htmlFor="username" className={styles.loginLabel}>
          <input type="text" name="username" placeholder="username" className={styles.loginInput} />
        </label>
        <label htmlFor="password" className={styles.loginLabel}>
          <input
            type="password"
            name="password"
            placeholder="password"
            className={styles.loginInput}
          />
        </label>
        <input type="submit" className={styles.loginBtn} />
      </div>
    </div>
  );
};

export default Login;
