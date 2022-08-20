import style from './repocards.module.scss';

const RepoCards = () => {
  const list = [
    {
      title: 'node-changes',
      desc: 'Prints the changelog for current or for the specific version of Node.js release to the termial',
      url: '//github.com/unigazer/node-changes',
    },
    {
      title: 'gimme-new-node',
      desc: 'Check for newer versions of Node.js for local machine',
      url: '//github.com/unigazer/gimme-new-node',
    },
    {
      title: 'instagram-dark-mode',
      desc: 'A proper dark mode for Instagram web version',
      url: '//github.com/unigazer/instagram-dark-mode',
    },
  ];

  return (
    <ul className={style.ul}>
      {list.map(({ title, desc, url }) => (
        <li key={title} className={style.li}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <p className={style.title}>{title}</p>
            <p className="description">{desc}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoCards;
