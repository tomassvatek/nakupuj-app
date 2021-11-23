import { DeliveryOptionItem } from "./components/DeliveryOption";
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
  cart: {
    title: "Košík",
    url: "/cart",
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

export const deliveryOptions: DeliveryOptionItem[] = [
  {
    title: "Váš aktuální nákup",
    deliveryDuration: "Za 4 dny",
    price: "50 Kč",
    save: 10,
    optionId: "1",
  },
  {
    title: "Nejlevnější nákup",
    deliveryDuration: "Zítra",
    price: "100 Kč",
    save: 4,
    optionId: "2",
  },
  {
    title: "Chci to najednou",
    deliveryDuration: "Za 6 dní",
    price: "50 Kč",
    save: 5,
    optionId: "3",
    childrenOptions: [
      {
        title: "Rohlik",
        deliveryDuration: "Zítra",
        price: "100 Kč",
        save: 4,
        optionId: "1",
      },
      {
        title: "Kosik",
        deliveryDuration: "Za 2 dny",
        price: "120 Kč",
        save: 4,
        optionId: "2",
      },
    ],
  },
];

// export const products: IProduct[] = [
// Suppliers
export const rohlik: ISupplier = {
  id: 1,
  name: "Rohlík",
};

export const kosik: ISupplier = {
  id: 2,
  name: "Košík",
};

export const tesco: ISupplier = {
  id: 3,
  name: "Tesco",
};

export const tamda: ISupplier = {
  id: 4,
  name: "Tamda Express",
};

// Categories
export const uzeniny: ICategory = {
  id: 1,
  name: "Uzeniny",
};

export const mlecneVyrobky: ICategory = {
  id: 2,
  name: "Mléčné výrobky",
};

export const ovoce: ICategory = {
  id: 3,
  name: "Ovoce",
};

export const maso: ICategory = {
  id: 4,
  name: "Maso",
};

export const pecivo: ICategory = {
  id: 2,
  name: "Pečivo",
};

export const napoje: ICategory = {
  id: 5,
  name: "Nápoje",
}

export const supplier: Record<number, ICategory> = {
  [rohlik.id]: rohlik,
  [tesco.id]: tesco,
  [kosik.id]: kosik,
  [tamda.id]: tamda,
};

export const categories: Record<number, ICategory> = {
  [uzeniny.id]: uzeniny,
  [mlecneVyrobky.id]: mlecneVyrobky,
  [ovoce.id]: ovoce,
  [maso.id]: maso,
};

const avokadoVariants: IProductVariant[] = [
  {
    id: 1,
    title: "Avokádo velké k dozrání Fuerte / Etinger / Zutano 1 ks",
    supplier: rohlik,
    price: 30.9,
    manufacturer: "Peru",
    weight: 100,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1303459/1303459-1482829885.jpg",
    parentId: 1,
  },
  {
    id: 2,
    title: 'Avokádo Hass "Ready to Eat" velké, 1 ks',
    supplier: kosik,
    price: 46.9,
    manufacturer: "Peru",
    weight: 100,
    imageURL:
      "https://static.kosik.cz/images/thumbs/fc/860x800x1_fc7c2eb04d55b8a9a50a86cd997af661.jpg",
    parentId: 1,
  },
  {
    id: 3,
    title: "Avokado ks",
    supplier: tesco,
    price: 16.9,
    manufacturer: "Peru",
    weight: 100,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/586/0000096091586/ShotType1_540x540.jpg",
    parentId: 1,
  },
];

const vysocinaVariants: IProductVariant[] = [
  {
    id: 4,
    title: "Kmotr Kmotrova Vysočina krájená",
    supplier: rohlik,
    price: 24.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1404253/1404253-1609786999175.jpg",
    parentId: 2,
  },
  {
    id: 5,
    title: "Pejskar Vysočina krájená",
    supplier: kosik,
    price: 24.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://static.kosik.cz/images/thumbs/07/860x800x1_07eae6c8ce92d6b022c06eb45e1cfd62.jpg",
    parentId: 2,
  },
  {
    id: 6,
    title: "Tesco Vysočina 100g",
    supplier: tesco,
    price: 19.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/701/5051007132701/ShotType1_540x540.jpg",
    parentId: 2,
  },
];

const prazskaSunkaVariants: IProductVariant[] = [
  {
    id: 7,
    title: "LE&CO Pražská šunka nejvyšší jakosti s obsahem masa 92 %",
    supplier: rohlik,
    price: 34.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://static.kosik.cz/images/thumbs/c7/860x800x1_c7748f279158848ace9600fc4a99336d.jpg",
    parentId: 3,
  },
  {
    id: 8,
    title: "Le & Co Pražská šunka nejvyšší jakosti plátky (92% masa)",
    supplier: kosik,
    price: 34.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/800393/800393-1606501125.jpg",
    parentId: 3,
  },
  {
    id: 9,
    title: "Kostelecké Uzeniny Poctivá šunka pražská 0,100kg",
    supplier: tesco,
    price: 42.9,
    manufacturer: "Česká republika",
    weight: 100,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/888/8595610503888/ShotType1_540x540.jpg",
    parentId: 3,
  },
];

const eidamVariants: IProductVariant[] = [
  {
    id: 10,
    title: "Miil Eidam 30% plátky",
    supplier: rohlik,
    price: 16.9,
    manufacturer: "Německo",
    weight: 100,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1413424/1413424-1631005178535.jpg",
    parentId: 4,
  },
  {
    id: 11,
    title: "Agricol Eidam polotvrdý sýr plátky (30%)",
    supplier: kosik,
    price: 25.9,
    manufacturer: "Německo",
    weight: 100,
    imageURL:
      "https://static.kosik.cz/images/thumbs/74/860x800x1_7440af83f084352d0810a9db82be2071.jpg",
    parentId: 4,
  },
  {
    id: 12,
    title: "Zlatý Sýr Eidam 30% plátky 100g",
    supplier: tesco,
    price: 26.9,
    manufacturer: "Německo",
    weight: 100,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/401/8594052743401/ShotType1_540x540.jpg",
    parentId: 4,
  },
];

const videnskeParkyVariants: IProductVariant[] = [
  {
    id: 13,
    title: "Dacello Vídeňské párky 85 %",
    supplier: rohlik,
    price: 44.9,
    manufacturer: "Česká republika",
    weight: 200,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1412785/1412785-1629809491873.jpg",
    parentId: 5,
  },
  {
    id: 14,
    title: "Ponnath Vídeňské minipárečky",
    supplier: kosik,
    price: 57.9,
    manufacturer: "Česká republika",
    weight: 200,
    imageURL:
      "https://static.kosik.cz/images/thumbs/9q/860x800x1_9q4ctd86f_8594036020924-t1.jpg",
    parentId: 5,
  },
  {
    id: 15,
    title: "Tesco Vídeňské párky 200g",
    supplier: tesco,
    price: 49.9,
    manufacturer: "Česká republika",
    weight: 200,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/725/5051007132725/ShotType1_540x540.jpg",
    parentId: 5,
  },
];

const kureciPrsniRizkyVariants: IProductVariant[] = [
  {
    id: 16,
    title: "Světničkové kuře prsní řízky",
    supplier: rohlik,
    price: 219.9,
    manufacturer: "Česká republika",
    weight: 1000,
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1353081/1353081-1582104399.jpg",
    parentId: 6,
  },
  {
    id: 17,
    title: "Raciola České Kuřecí prsní řízky čerstvé",
    supplier: kosik,
    price: 169.9,
    manufacturer: "Česká republika",
    weight: 1000,
    imageURL:
      "https://static.kosik.cz/images/thumbs/da/860x800x1_da51dfb4c89ad964f50cd366a7748586.jpg",
    parentId: 6,
  },
  {
    id: 18,
    title: "Kuřecí prsní řízky volné",
    supplier: tesco,
    price: 159.9,
    manufacturer: "Česká republika",
    weight: 1000,
    imageURL:
      "https://secure.ce-tescoassets.com/assets/CZ/224/281224/ShotType1_540x540.jpg",
    parentId: 6,
  },
];

const chlebVariants: IProductVariant[] = [
  {
    id: 19,
    title: "Pekárna Kabát Kabátův Cvrček",
    weight: 800,
    price: 39.9,
    supplier: kosik,
    manufacturer: "Pekárna Kabát",
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1314061/1314061-1470908573.jpg",
    parentId: 7,
  },
  {
    id: 20,
    title: "Chléb konzumní",
    weight: 1200,
    price: 28.9,
    supplier: rohlik,
    manufacturer: "United Bakeries a.s.",
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/1314061/1314061-1470908573.jpg",
    parentId: 7,
  },
];

const kaiserkaVariants: IProductVariant[] = [
  {
    id: 21,
    title: "Kaiserka cereální sypaná sezamem",
    weight: 50,
    price: 4.5,
    supplier: rohlik,
    manufacturer: "Bidfood",
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg",
    parentId: 8,
  },
  {
    id: 22,
    title: "Kaiserka cereální",
    weight: 60,
    price: 4.5,
    supplier: tesco,
    manufacturer: "Tesco Stores ČR a.s.",
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg",
    parentId: 8,
  },
  {
    id: 23,
    title: "Kaiserka cereální",
    weight: 55,
    price: 3.9,
    supplier: kosik,
    manufacturer: "Košík.cz",
    imageURL:
      "https://www.rohlik.cz/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.rohlik.cz/images/grocery/products/717953/717953-1498808178.jpg",
    parentId: 8,
  },
];

const perlivaVariants: IProductVariant[] = [
  {
    id: 24,
    title: 'Korunní Jemně perlivá',
    weight: 1.5,
    price: 12.48,
    supplier: rohlik,
    manufacturer: 'Korunní',
    imageURL: 'https://static.kosik.cz/images/thumbs/sh/430x400x1_shszyjgzn_thumbnail-korunni-6pack-1-5l-prirodni-jemne-perliva.jpg',
    parentId: 9,
  },
  {
    id: 25,
    title: 'Aquila Jemně perlivá',
    weight: 1.5,
    price: 12.99,
    supplier: rohlik,
    manufacturer: 'Aquila',
    imageURL: 'https://static.kosik.cz/images/thumbs/zq/207x174x1_zqa1ebkkm_6pack-aquila-aqualinea-jemne-perliva-2014-2.jpg',
    parentId: 9,
  },
  {
    id: 26,
    title: 'Magnesia Jemně perlivá',
    weight: 1.5,
    price: 13.99,
    supplier: tesco,
    manufacturer: 'Magnesia',
    imageURL: 'https://static.kosik.cz/images/thumbs/lg/207x174x1_lgjj4or1u_microsoftteams-image.png',
    parentId: 9,
  },
]

const pivoVariants: IProductVariant[] = [
  {
    id: 27,
    title: 'Pilsner Urquell světlý ležák',
    weight: 0.5,
    price: 23.90,
    supplier: rohlik,
    manufacturer: 'Pilsner Urquell',
    imageURL: 'https://static.kosik.cz/images/thumbs/4e/207x174x1_4evdbxj9xm40-pu-lahev-0-5l-neorosena.png',
    parentId: 10,
  },
  {
    id: 28,
    title: 'Velkopopovický Kozel 11',
    weight: 0.5,
    price: 19.90,
    supplier: tesco,
    manufacturer: 'Kozel',
    imageURL: 'https://static.kosik.cz/images/thumbs/5m/207x174x1_5mjw11ogg83s-vpk-11-0-5l-oro-plech.jpg',
    parentId: 10,
  },
  {
    id: 29,
    title: 'Zlatopramen 11',
    weight: 0.5,
    price: 13.90,
    supplier: tesco,
    manufacturer: 'Zlatopramen',
    imageURL: 'https://static.kosik.cz/images/thumbs/fc/207x174x1_fce4c23132b92529ffc6d09410a18eb1.jpg',
    parentId: 10,
  },
]

const energyVariants: IProductVariant[] = [
  {
    id: 30,
    title: 'Monster Ultra Paradise',
    weight: 0.5,
    price: 36.90,
    supplier: tesco,
    manufacturer: 'Monster',
    imageURL: 'https://static.kosik.cz/images/thumbs/wk/207x174x1_wkyo7qyao_monster-ultra-paradise-500ml.jpg',
    parentId: 11,
  },
  {
    id: 31,
    title: 'Big Shock! Original',
    weight: 0.5,
    price: 29.90,
    supplier: tesco,
    manufacturer: 'Big Shock!',
    imageURL: 'https://static.kosik.cz/images/thumbs/54/207x174x1_54tgl7qkb_8594033170028-t1.jpg',
    parentId: 11,
  },
  {
    id: 32,
    title: 'Tiger Energy Drink',
    weight: 0.5,
    price: 19.90,
    supplier: rohlik,
    manufacturer: 'Tiger',
    imageURL: 'https://static.kosik.cz/images/thumbs/1s/207x174x1_1snqkugjzhai-8594057637859-tiger-energy-drink-classic-0-5l-plech.png',
    parentId: 11,
  },
]

const rumVariants: IProductVariant[] = [
  {
    id: 33,
    title: 'Božkov Republica Elixír Honey 35%',
    weight: 0.5,
    price: 319.90,
    supplier: rohlik,
    manufacturer: 'Božkov',
    imageURL: 'https://static.kosik.cz/images/thumbs/8u/207x174x1_8upguxuu1_bozkov-republica-honey-500ml-01.png',
    parentId: 12,
  },
  {
    id: 34,
    title: 'Božkov Bylinný likér 33%',
    weight: 0.5,
    price: 169.90,
    supplier: tesco,
    manufacturer: 'Božkov',
    imageURL: 'https://static.kosik.cz/images/thumbs/t1/207x174x1_t15m8nwqn_bozkov-bylinny-500ml-01.png',
    parentId: 12,
  },
  {
    id: 35,
    title: 'Diplomático Reserva Exclusiva (40%)',
    weight: 0.7,
    price: 1199.90,
    supplier: tesco,
    manufacturer: 'Diplomático',
    imageURL: 'https://static.kosik.cz/images/thumbs/4z/207x174x1_4zqjkifc3_2911-diplomatico-reserva-exclusiva-tuba.png',
    parentId: 12,
  },
]

const dzusVariants: IProductVariant[]  = [
  {
    id: 36,
    title: 'Pfanner 100% pomerančová šťáva',
    weight: 0.5,
    price: 56.90,
    supplier: tesco,
    manufacturer: 'Pfanner',
    imageURL: 'https://static.kosik.cz/images/thumbs/c5/207x174x1_c5da11db13121b7b4fab2b804a8eb64d.jpg',
    parentId: 13,
  },
  {
    id: 37,
    title: 'Relax 100% Pomeranč ',
    weight: 0.5,
    price: 24.90,
    supplier: rohlik,
    manufacturer: 'Relax',
    imageURL: 'https://static.kosik.cz/images/thumbs/e7/207x174x1_e7d6053682a52e1ba813eebbedf7ba17.jpg',
    parentId: 13,
  },
  {
    id: 38,
    title: 'NN Pomeranč 100%',
    weight: 0.5,
    price: 23.90,
    supplier: tesco,
    manufacturer: 'NN',
    imageURL: 'https://static.kosik.cz/images/thumbs/c5/207x174x1_c5da11db13121b7b4fab2b804a8eb64d.jpg',
    parentId: 13,
  },
]

export const products: IProduct[] = [
  {
    id: 1,
    title: "Avokádo",
    description:
      "Tvrdé, na pohled hezké avokádo, které musíte nechat dozrát doma. Avokádo Fuerte jako takové totiž nedosáhne plné zralosti na stromě, ale zraje až po pádu na zem. Dozrání trvá přibližně 3 dny. Nejlépe zraje zabalené do papíru při pokojové teplotě.",
    isNew: false,
    category: ovoce,
    variants: avokadoVariants,
  },
  {
    id: 2,
    title: "Vysočina",
    description:
      "Ideální na sendviče, Uzené kořenité aroma, přiměřeně slaná chuť, 130 g masa/100 g výrobku. Masný výrobek trvanlivý tepelně opracovaný, krájený.",
    isNew: true,
    category: uzeniny,
    variants: vysocinaVariants,
  },
  {
    id: 3,
    title: "Pražská šunka",
    description:
      "Dušená šunka nejvyšší jakosti je vyrobena z vybrané vepřové kýty, lehce zauzena přírodním kouřem. Podíl masa v šunce je 92 %. Struktura je většinou tvořena z jedné nebo několika málo svalových partií. Obsah čistých svalových bílkovin je minimálně 16 %. Masný, tepelně opracovaný výrobek.",
    isNew: false,
    category: uzeniny,
    variants: prazskaSunkaVariants,
  },
  {
    id: 4,
    title: "Eidam 30%",
    description:
      "Miil Eidam, přírodní sýr v plátcích, 30% tuku v sušině. Jedná se o polotvrdý, zrající sýr, který je znám svou plnou chutí. Původ mléka Německo. Sýr vyroben v Německu. Baleno v České republice.",
    isNew: true,
    category: mlecneVyrobky,
    variants: eidamVariants,
  },

  {
    id: 5,
    title: "Vídeňské párky",
    description:
      "Dacello Vídeňské párky z vybraného vepřového masa. Párky jsou zauzené kouřem z bukového dřeva. Obsah masa činí 85 %. Balení obsahuje 4 nožičky.",
    isNew: false,
    category: uzeniny,
    variants: videnskeParkyVariants,
  },
  {
    id: 6,
    title: "Kuřecí prsní řízky 1 kg",
    description:
      "Maso pochází z drůbeže, které vyrostlo na Moravě. Kuřata byla krmena pouze krmivem bez přidaných látek urychlující růst. Maso je chlazeno v moderním systému bez použití vody. Světničkové kuře představuje privátní značku, jejímž majitelem je Sklizeno, a pod kterou Vám je nabízeno kvalitní kuřecí maso s transparentním původem z konvenčního chovu.",
    isNew: false,
    category: maso,
    variants: kureciPrsniRizkyVariants,
  },
  {
    id: 7,
    title: "Chléb",
    isNew: false,
    description:
      "Chleba z kvalitní žitné a chlebové mouky doplněný o kmín.\n\nKabátův cvrček je vyrobený ručně ze slaného, kynutého těsta podle starých receptur našich babiček a dědečků. Cvrček má vláčnou texturu a příjemně kmínovou chuť.",
    fullDescription:
      '<p>Chleba z<strong> kvalitní žitné </strong>a <strong>chlebové mouky</strong> doplněný o&nbsp;kmín.</p> <p>Kabátův cvrček je vyrobený ručně ze slaného, kynutého těsta <strong>podle starých receptur</strong> našich babiček a dědečků. Cvrček má <strong>vláčnou texturu</strong> a příjemně <strong>kmínovou chuť</strong>.</p> <p class="align-center"><img alt="" height="427" src="https://cdn.rohlik.cz/uploads/od%20%C5%A1t%C4%9Bp%C3%A1na/chleba.jpg" width="640"></p> <p><strong>Použití</strong></p> <p>Určeno k přímé spotřebě. Čerstvý chléb je ideální ke snídani či svačině. Můžete si ho vychutnat ale i jako přílohu ke grilování.</p> <p><strong>O výrobci</strong></p> <p>Česká pekárna, jejíž historie sahá až do roku 1992 a vede jí dnes již druhá generace rodiny Kabátů, to je Pekárna Kabát. Firma se specializuje na ruční výrobu pečiva podle tradičních receptur. Zakládá si poctivém pekařském řemeslu, které kdysi dělali naši dědové a pradědové.</p> <p class="align-center"><img alt="" height="155" src="https://cdn.rohlik.cz/uploads/od%20%C5%A1t%C4%9Bp%C3%A1na/kab%C3%A1t%20logo.jpg" width="225"></p> <p>Produkty jsou vyráběny z prvotřídních surovin, které jsou převážně českého původ. To vše bez chemických přísad a potravinářských náhražek. Kromě tradičního sladkého a slaného pečiva, se společnost zaměřuje také na výrobu obložených baget, housek a chlebíčků. V neposlední řadě najdete na jejich pultech také klasické cukrářské výrobky.</p> <p><strong>Skladování</strong></p> <p>Skladujte v suchu při pokojové teplotě do 24&nbsp;°C. Nevystavujte přímému slunečnímu záření.</p> <p><strong>Výrobce</strong></p> <p>Pekárna Kabát, s.r.o.<br> Nad zavážkou 1184/5<br> 143 00 Praha 4<br> Česká republika</p>',
    category: pecivo,
    variants: chlebVariants,
  },
  {
    id: 8,
    title: "Kaiserka",
    isNew: false,
    description:
      "Kaiserka cereální je běžným vícezrnným pečivem, upečeným ze zmrazeného polotovaru.",
    fullDescription:
      '<p>Kaiserka cereální je běžným vícezrnným pečivem,&nbsp;upečeným ze zmrazeného polotovaru.</p> <p><strong>Použití</strong></p> <p>Pečivo používáme během celého dne ke snídani, svačinám a jako přílohu k pokrmům.&nbsp;</p> <div> <p><strong>O výrobci</strong></p> <p>Bidfood se objevil na trhu už roku 1990 v dánském zastoupení společnosti Nowaco. Zabývá se především distribucí mražených a chlazených potravin.</p> <p class="align-center"><img alt="" height="68" src="https://cdn.rohlik.cz/uploads/Viktorie/bidfood%20logo.png" width="250"></p> <p>Společnost dále vyvíjí a vyrábí potraviny s vlastními značkami. Má pod křídly hned několik vlastních značek jako jsou například Nowaco, Prima, Petron, Gurmet, Banquet, Drůbež Dýšina, Bagetier, Dobroty babičky Kláry, Coronet a také Meliko.</p> <p><strong>Skladování</strong></p> <p>Pečivo skladujeme nejlépe v papírových či plátěných sáčcích.&nbsp;Rozpečené pečivo ze zmrazeného polotovaru je určeno spíše k&nbsp;rychlé spotřebě.</p> <p><strong>Výrobce</strong></p> <p>Bidfood Czech Republic s.r.o.<br> V Růžovém údolí 553<br> 278 01&nbsp;Kralupy nad Vltavou<br> Česká republika</p> </div> <p>&nbsp;</p>',
    category: pecivo,
    variants: kaiserkaVariants,
  },
  {
    id: 9,
    title: 'Perlivá voda',
    isNew: false,
    description: "Pijete vodu, která urazila dlouhou cestu v hlubinách sopečného Doupovského pohoří. Na své cestě se obohatila minerály, nasytila se přírodním oxidem uhličitým a tak získala svoje charakteristické vlastnosti a chuť.",
    category: napoje,
    variants: perlivaVariants,
  },
  {
    id: 10,
    title: 'Pivo 11',
    isNew: false,
    description: "Pivo je kvašený alkoholický nápoj hořké chuti vyráběný v pivovaru z obilného sladu, vody a chmele pomocí pivovarských kvasinek, který se těší značné oblibě v Česku i v zahraničí.",
    category: napoje,
    variants: pivoVariants,
  },
  {
    id: 11,
    title: 'Energetické nápoje',
    isNew: false,
    description: "Energetické nápoje jsou nealkoholické nápoje, které obsahují stimulační látky, v největší míře kofein a taurin. Mohou také obsahovat cukr či umělá sladidla, bylinné výtažky a aminokyseliny.",
    category: napoje,
    variants: energyVariants,
  },
  {
    id: 12,
    title: 'Rum',
    isNew: false,
    description: "Rum je alkoholický nápoj destilovaný z melasy nebo ze šťávy získané z cukrové třtiny. Původ slova rum není jasný. Odborníci uvádějí dvě varianty. Podle první teorie je slovo rum odvozeno od slova rumbellion, což je anglicky „velký ruch“.",
    category: napoje,
    variants: rumVariants,
  },
  {
    id: 13,
    title: 'Džus',
    isNew: false,
    description: "Džus je šťáva připravená lisováním ovoce nebo zeleniny. Existují džusy jednodruhové nebo smíšené z několika druhů ovoce. Oblíbený je například pomerančový džus, který je vyráběn z plodů pomerančovníku. Džusy se dodávají i ve formě koncentrátu a ředí se pak do původní hustoty vodou.",
    category: napoje,
    variants: dzusVariants,
  }
];
