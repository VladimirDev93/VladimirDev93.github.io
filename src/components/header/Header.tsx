import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './header.module.scss';

const Navs = () => {
  const list = [
    {
      label: 'Repositories',
      url: '/repos',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ];

  const router = useRouter();

  return (
    <>
      {router.pathname !== '/' && (
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      )}
      {list.map(({ label, url }) => (
        <li key={label}>
          <a href={url}>{label}</a>
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
