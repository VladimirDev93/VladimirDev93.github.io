'use client';

import Link from 'next/link';
import style from './header.module.css';

const Navs = () => {
  const list = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Repositories',
      url: '/repos',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ];

  return (
    <>
      {list.map(({ label, url }) => (
        <li key={label}>
          <Link href={url}>{label}</Link>
        </li>
      ))}
    </>
  );
};

const Header = () => (
  <header className={style.header}>
    <ul className={style.ul}>
      <Navs />
    </ul>
  </header>
);

export default Header;
