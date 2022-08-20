import Image from 'next/image';
import SocialIcons from '../social-icons/SocialIcons';
import style from './main.module.scss';

const Main = () => (
  <main className={style.main}>
    <Image
      src="/me.webp"
      alt="avatar"
      className={style.img}
      width={160}
      height={160}
    />
    <h1>Hi, I&apos;m Vladimir!</h1>
    <p className={style.p}>
      Software Engineer, nature and cat lover, amateur astronomer.
    </p>
    <div className={style.social}>
      <SocialIcons />
    </div>
  </main>
);

export default Main;
