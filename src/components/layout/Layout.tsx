import { ReactNode } from 'react';
import Header from '../header/Header';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
