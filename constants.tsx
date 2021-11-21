import { devNull } from "os";
import { ICategory, IProduct, IProductVariant, ISupplier } from "./types";

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

export const rohlik: ISupplier = {
  id: 1,
  name: "Rohlík"
}

export const kosik: ISupplier = {
  id: 2,
  name: "Rohlík"
}

export const tesco: ISupplier = {
  id: 3,
  name: "Tesco"
}

export const uzeniny: ICategory = {
  id: 1,
  name: "Uzeniny"
}

export const mlecneVyrobky: ICategory = {
  id: 2,
  name: "Mléčné výrobky"
}

export const ovoce: ICategory = {
  id: 3,
  name: "Ovoce"
}

export const maso: ICategory = {
  id: 4,
  name: "Maso"
}

const avokadoVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Avokádo velké k dozrání Fuerte / Etinger / Zutano 1 ks",
    supplier: rohlik,
    price_formatted: "30,90 Kč",
    price: 30.90
  },
  {
    id: 2,
    title: "Avokádo Hass \"Ready to Eat\" velké, 1 ks",
    supplier: kosik,
    price_formatted: "46,90 Kč",
    price: 46.90
  },
  {
    id: 3,
    title: "Avokado ks",
    supplier: tesco,
    price_formatted: "16,90 Kč",
    price: 16.90
  }
]

const vysocinaVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Kmotr Kmotrova Vysočina krájená",
    supplier: rohlik,
    price_formatted: "24,90 Kč",
    price: 24.90
  },
  {
    id: 2,
    title: "Pejskar Vysočina krájená",
    supplier: kosik,
    price_formatted: "29,90 Kč",
    price: 24.90
  },
  {
    id: 3,
    title: "Tesco Vysočina 100g",
    supplier: tesco,
    price_formatted: "19,90 Kč",
    price: 19.90
  }
]

const prazskaSunkaVariants: IProductVariant[] = [
  {
    id: 1,
    title: "LE&CO Pražská šunka nejvyšší jakosti s obsahem masa 92 %",
    supplier: rohlik,
    price_formatted: "34,90 Kč",
    price: 34.90
  },
  {
    id: 2,
    title: "Le & Co Pražská šunka nejvyšší jakosti plátky (92% masa)",
    supplier: kosik,
    price_formatted: "34,90 Kč",
    price: 34.90
  },
  {
    id: 3,
    title: "Kostelecké Uzeniny Poctivá šunka pražská 0,100kg",
    supplier: tesco,
    price_formatted: "42,90 Kč",
    price: 42.90
  }
]

const eidamVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Miil Eidam 30% plátky",
    supplier: rohlik,
    price_formatted: "16,90 Kč",
    price: 16.90
  },
  {
    id: 2,
    title: "Agricol Eidam polotvrdý sýr plátky (30%)",
    supplier: kosik,
    price_formatted: "25,90 Kč",
    price: 25.90
  },
  {
    id: 3,
    title: "Zlatý Sýr Eidam 30% plátky 100g",
    supplier: tesco,
    price_formatted: "26,90 Kč",
    price: 26.90
  }
]

const videnskeParkyVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Dacello Vídeňské párky 85 %",
    supplier: rohlik,
    price_formatted: "44,90 Kč",
    price: 44.90
  },
  {
    id: 2,
    title: "Ponnath Vídeňské minipárečky",
    supplier: kosik,
    price_formatted: "57,90 Kč",
    price: 57.90
  },
  {
    id: 3,
    title: "Tesco Vídeňské párky 200g",
    supplier: tesco,
    price_formatted: "49,90 Kč",
    price: 49.90
  }
]

const kureciPrsniRizkyVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Světničkové kuře prsní řízky",
    supplier: rohlik,
    price_formatted: "219,90 Kč",
    price: 219.90
  },
  {
    id: 2,
    title: "Raciola České Kuřecí prsní řízky čerstvé",
    supplier: kosik,
    price_formatted: "169,90 Kč",
    price: 169.90
  },
  {
    id: 3,
    title: "Kuřecí prsní řízky volné",
    supplier: tesco,
    price_formatted: "159,90 Kč",
    price: 159.90
  }
]

export const products: IProduct[] = [
  {
    id: 1,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    imageURLs: [
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
      "https://static.kosik.cz/images/thumbs/fc/860x800x1_fc7c2eb04d55b8a9a50a86cd997af661.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/586/0000096091586/ShotType1_540x540.jpg"
    ],
    manufacturer: "Peru",
    category: ovoce,
    variants: avokadoVariants,
    weight: 100,
  },
  {
    id: 2,
    title: "Vysočina",
    description:
      "Ideální na sendviče, Uzené kořenité aroma, přiměřeně slaná chuť, 130 g masa/100 g výrobku. Masný výrobek trvanlivý tepelně opracovaný, krájený.",
    isNew: true,
    imageURLs: [
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1404253/1404253-1609786999175.jpg",
      "https://static.kosik.cz/images/thumbs/07/860x800x1_07eae6c8ce92d6b022c06eb45e1cfd62.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/701/5051007132701/ShotType1_540x540.jpg"
    ],
    manufacturer: "Česká republika",
    category: uzeniny,
    variants: vysocinaVariants,
    weight: 100
  },
  {
    id: 3,
    title: "Pražská šunka",
    description:
      "Dušená šunka nejvyšší jakosti je vyrobena z vybrané vepřové kýty, lehce zauzena přírodním kouřem. Podíl masa v šunce je 92 %. Struktura je většinou tvořena z jedné nebo několika málo svalových partií. Obsah čistých svalových bílkovin je minimálně 16 %. Masný, tepelně opracovaný výrobek.",
    isNew: false,
    imageURLs: [
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/800393/800393-1606501125.jpg",
      "https://static.kosik.cz/images/thumbs/c7/860x800x1_c7748f279158848ace9600fc4a99336d.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/888/8595610503888/ShotType1_540x540.jpg"
    ],
    manufacturer: "Česká republika",
    category: uzeniny,
    variants: prazskaSunkaVariants,
    weight: 100
  },
  {
    id: 4,
    title: "Eidam 30%",
    description:
      "Miil Eidam, přírodní sýr v plátcích, 30% tuku v sušině. Jedná se o polotvrdý, zrající sýr, který je znám svou plnou chutí. Původ mléka Německo. Sýr vyroben v Německu. Baleno v České republice.",
    isNew: true,
    imageURLs: [
      "https://static.kosik.cz/images/thumbs/74/860x800x1_7440af83f084352d0810a9db82be2071.jpg",
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1413424/1413424-1631005178535.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/401/8594052743401/ShotType1_540x540.jpg"
    ],
    manufacturer: "Německo",
    category: mlecneVyrobky,
    variants: eidamVariants,
    weight: 100
  },
  {
    id: 5,
    title: "Vídeňské párky",
    description:
      "Dacello Vídeňské párky z vybraného vepřového masa. Párky jsou zauzené kouřem z bukového dřeva. Obsah masa činí 85 %. Balení obsahuje 4 nožičky.",
    isNew: false,
    imageURLs: [
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1412785/1412785-1629809491873.jpg",
      "https://static.kosik.cz/images/thumbs/9q/860x800x1_9q4ctd86f_8594036020924-t1.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/725/5051007132725/ShotType1_540x540.jpg"
    ],
    manufacturer: "Česká republika",
    category: uzeniny,
    variants: videnskeParkyVariants,
    weight: 200
  },
  {
    id: 6,
    title: "Kuřecí prsní řízky 1 kg",
    description:
      "Maso pochází z drůbeže, které vyrostlo na Moravě. Kuřata byla krmena pouze krmivem bez přidaných látek urychlující růst. Maso je chlazeno v moderním systému bez použití vody. Světničkové kuře představuje privátní značku, jejímž majitelem je Sklizeno, a pod kterou Vám je nabízeno kvalitní kuřecí maso s transparentním původem z konvenčního chovu.",
    isNew: false,
    imageURLs: [
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1353081/1353081-1582104399.jpg",
      "https://static.kosik.cz/images/thumbs/da/860x800x1_da51dfb4c89ad964f50cd366a7748586.jpg",
      "https://secure.ce-tescoassets.com/assets/CZ/224/281224/ShotType1_540x540.jpg"
    ],
    manufacturer: "Česká republika",
    category: maso,
    variants: kureciPrsniRizkyVariants,
    weight: 1000
  },
];
