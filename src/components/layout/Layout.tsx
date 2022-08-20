import { ReactNode } from 'react';
import Header from '../header/Header';
import style from './layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <div className={style.container}>{children}</div>
  </>
);

export default Layout;
