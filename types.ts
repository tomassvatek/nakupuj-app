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
  supplier: number;
  price_formatted: string;
  price: number;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  isNew: boolean;
  imageURL: string;
  manufacturer: string;
  category: number;
  variants?: IProductVariant[];
  weight: number;
  price_formatted: string;
  price: number;
}

export interface ICartItem {
  id: number;
  product: IProduct;
  quantity: number;
}

export interface ICart {
  items: ICartItem;
}
