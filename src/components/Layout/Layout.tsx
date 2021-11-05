import { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import classes from './Layout.module.scss';

export interface LayoutProps {
  admin?: boolean;
}

const Layout: FC<LayoutProps> = ({ admin, children }) => {
  const className = classes[`Container_${admin ? 'Admin' : 'Public'}`];
  return admin ? (
    <div className={className}>
      <main>{children}</main>
    </div>
  ) : (
    <div className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
