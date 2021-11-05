import { FC } from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../../components/Layout/Layout';
import NotFound from '../NotFound';
import Home from './Home/Home';
import Presentation from './Presentation/Presentation';

export interface PublicProps {}

const Public: FC<PublicProps> = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/services" element={<Presentation />} />
        <Route path="/produits" element={<Presentation />} />
        <Route path="/actualites" element={<Presentation />} />
        <Route path="/contact" element={<Presentation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};

export default Public;
