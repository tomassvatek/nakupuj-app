export interface ISupplier {
  id: number;
  name: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProductVariant {
  id: number;
  title: string;
  supplier: ISupplier;
  price_formatted: string;
  price: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  isNew: boolean;
  imageURLs: string[];
  manufacturer: string;
  category: ICategory;
  variants: IProductVariant[];
  weight: number;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  quantity: number;
}

export interface ICart {
  items: ICartItem;
}
