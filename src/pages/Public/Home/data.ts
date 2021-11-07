import { v4 as uuidv4 } from 'uuid';

import classes from './Home.module.scss';

export const carouselImages = [
  {
    id: uuidv4(),
    text: 'Lancez votre propre marque de cosmétiques',
    textContainerClass: classes.Text_Light,
    href: '/presentation',
  },
  {
    id: uuidv4(),
    text: 'Résoudre les problèmes de formulation',
    textContainerClass: classes.Text_Light,
    href: '/services',
  },
  {
    id: uuidv4(),
    text: 'Optimisez la création de vos produits',
    textContainerClass: classes.Text_Brown,
    href: '/produits',
  },
];
