export interface ISupplier {
  /** Globally unique ID for this type */
  id: number;
  name: string;
}

export interface ICategory {
  /** Globally unique ID for this type */
  id: number;
  name: string;
}

export interface IProductVariant {
  /** Globally unique ID for this type */
  id: number;
  title: string;
  supplier: ISupplier;
  /** Price in CZK */
  price: number;
  /** Weight in grams */
  weight: number;
  /** Manufacturer of this product variant */
  manufacturer: string;

  imageURL?: string;

  parentId: number
}

export interface IProduct {
  /** Globally unique ID for this type */
  id: number;
  title: string;
  isNew: boolean;
  category: ICategory;
  variants: IProductVariant[];

  /** For simplicity, same for all variants */
  description: string;
  /** For simplicity, same for all variants */
  fullDescription?: string;
  // /** For simplicity, same for all variants */
  // imageURL?: string;
}
