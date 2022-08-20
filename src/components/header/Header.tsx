import style from './header.module.scss';

const Navs = () => {
  const list = [
    {
      label: 'Repositories',
      url: '/repos',
    },
    {
      label: 'Contact',
      url: '/url',
    },
  ];

  return (
    <>
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
