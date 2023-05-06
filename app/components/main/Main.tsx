'use client';

import Image from 'next/image';
import SocialIcons from '../social-icons/SocialIcons';
import style from './main.module.css';

const Main = () => (
  <main className={style.main}>
    <Image
      src="/me.jpg"
      alt="avatar"
      className={style.img}
      width={160}
      height={160}
      loading="eager"
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
