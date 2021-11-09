import { FC } from 'react';
import { useHideCampaignBar } from '../../hooks/useHideCampaignBar';
import { useTopBar } from '../../hooks/useTopBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopArrow from '../TopArrow/TopArrow';

import classes from './Layout.module.scss';

export interface LayoutProps {
  admin?: boolean;
}

const Layout: FC<LayoutProps> = ({ admin, children }) => {
  const className = classes[`Container_${admin ? 'Admin' : 'Public'}`];
  const { isCampaignBarVisible } = useHideCampaignBar();
  const isTopBarVisible = useTopBar();

  return admin ? (
    <div className={className}>
      <main>{children}</main>
    </div>
  ) : (
    <div
      className={`${className} ${
        isCampaignBarVisible ? classes.CampaignBar_Visible : classes.CampaignBar_Hidden
      }`}>
      <Header />
      <main className={`${!isTopBarVisible ? '' : classes.TopBar_Hidden} `}>
        {children}
        <TopArrow />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
