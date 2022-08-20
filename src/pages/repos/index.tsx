import { NextPage } from 'next';
import Layout from 'components/layout/Layout';
import RepoCards from 'components/repo-cards/RepoCards';
import style from './repos.module.scss';

const Repos: NextPage = () => (
  <Layout>
    <h1 className={style.h1}>Repositories</h1>
    <RepoCards />
  </Layout>
);

export default Repos;
