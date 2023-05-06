import { NextPage } from 'next';
import RepoCards from 'components/repo-cards/RepoCards';
import style from './repos.module.css';

const Repos: NextPage = () => (
  <>
    <h1 className={style.h1}>Repositories</h1>
    <RepoCards />
  </>
);

export default Repos;
