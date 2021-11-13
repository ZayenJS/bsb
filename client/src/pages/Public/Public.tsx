import { FC } from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../components/Layout/Layout';
import NotFound from '../NotFound';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import LegalNotice from './LegalNotice/LegalNotice';
import News from './News/News';
import Presentation from './Presentation/Presentation';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import Products from './Products/Products';
import Services from './Services/Services';

export interface PublicProps {}

const Public: FC<PublicProps> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/actualites" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<LegalNotice />} />
        <Route path="/politiques-de-confidentialite" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Public;
