import SocialIcons from '../social-icons/SocialIcons';
import style from './main.module.scss';

const Main = () => (
  <main className={style.main}>
    <h1>Hi, I&apos;m Vladimir!</h1>
    <p className={style.p}>Software Engineer, nature and cat lover, amateur astronomer.</p>
    <div className={style.social}>
      <SocialIcons />
    </div>
  </main>
);

export default Main;
