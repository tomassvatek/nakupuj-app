import { IProduct } from "./types";

interface IPage {
  title: string;
  url: string;
}

export const pages = {
  index: {
    title: "Hlavní strana",
    url: "/",
  },
  about: {
    title: "O nás",
    url: "/about",
  },
  orders: {
    title: "Historie objednávek",
    url: "/account/orders",
  },
  settings: {
    title: "Nastavení účtu",
    url: "/account/settings",
  },
  "cart-full": {
    title: "Košík",
    url: "/cart/full",
  },
  "cart-empty": {
    title: "Košík",
    url: "/cart/empty",
  },
  "cart-payment": {
    title: "Doprava a platba",
    url: "/cart/payment",
  },
  search: {
    title: "Vyhledávání",
    url: "/search",
  },
};

export const products: IProduct[] = [
  {
    id: 1,
    title: "Kostelecké Uzeniny Poctivý vídeňský párek",
    price_formatted: "64,90 Kč",
    price: 64.9,
    description:
      "Vepřové maso 90%, Pitná voda, Jedlá sůl, Stabilizátory E250, E451, Koření, Aroma, Antioxidant erythorban sodný, Cukr, Maltodextrin, Česnekový prášek, Skopové střívko",
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
    isNew: true,
  } as any,
  {
    id: 2,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "30 Kč",
    price: 30,
  },
  {
    id: 2,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "2830,90 Kč",
    price: 30,
  },
  {
    id: 3,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "30 Kč",
    price: 30,
  },
  {
    id: 4,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "30 Kč",
    price: 30,
  },
  {
    id: 5,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "30 Kč",
    price: 30,
  },
  {
    id: 6,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    manufacturer: "Peru",
    category: 1,
    variants: null,
    weight: "30 g",
    price_formatted: "30 Kč",
    price: 30,
  },
];
