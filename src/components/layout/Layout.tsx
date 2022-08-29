import { ReactNode } from 'react';
import Header from '../header/Header';
import style from './layout.module.scss';

interface ILayout {
  itemsCenter: boolean;
  children: ReactNode;
}

const Layout = ({ children, itemsCenter }: ILayout) => (
  <>
    <Header />
    <div
      className={
        itemsCenter ? `${style.center} ${style.container}` : style.container
      }
    >
      {children}
    </div>
  </>
);

export default Layout;
