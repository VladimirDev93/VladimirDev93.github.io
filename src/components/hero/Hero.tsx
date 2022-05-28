import styles from "./hero.module.scss";

const Hero = () => (
  <main className={styles.main}>
    <div className={styles.avatar}>
      <img src="/img/me.webp" alt="Avatar" width={478} height={478} className={styles.avatarImage} />
      <p>SOCIAL_MEDIA_LINKS</p>
    </div>
    <div className={styles.intro}>
      <p>Hi,</p>
      <p>I'm <b>Vladimir.</b></p>
      <h1>Software Engineer</h1>
    </div>
  </main>
);

export default Hero;
