import { IProduct } from './types';

interface IPage {
  title: string,
  url: string,
};

export const pages = {
  'index': {
    'title': 'Hlavní strana',
    'url': '/',
  },
  'about': {
    'title': 'O nás',
    'url': '/about',
  },
  'orders': {
    'title': 'Historie objednávek',
    'url': '/account/orders',
  },
  'settings': {
    'title': 'Nastavení účtu',
    'url': '/account/settings',
  },
  'cart-full': {
    'title': 'Košík',
    'url': '/cart/full',
  },
  'cart-empty': {
    'title': 'Košík',
    'url': '/cart/empty',
  },
  'cart-payment': {
    'title': 'Doprava a platba',
    'url': '/cart/payment',
  },
  'search': {
    'title': 'Vyhledávání',
    'url': '/search',
  },
};



export const products: IProduct[] = [
  {
    id: 1,
    title: 'Kostelecké Uzeniny Poctivý vídeňský párek',
    price_formatted: '64,90 Kč',
    price: 64.9,
    description: 'Vepřové maso 90%, Pitná voda, Jedlá sůl, Stabilizátory E250, E451, Koření, Aroma, Antioxidant erythorban sodný, Cukr, Maltodextrin, Česnekový prášek, Skopové střívko',
    imageURL: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    isNew: true,
  } as any,
];
