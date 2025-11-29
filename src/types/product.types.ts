export type ProductImage = {
  url: string;
  is_main: boolean;
};

export type Specification = {
  [key: string]: string | number | boolean;
};

export type Product = {
  id: string;
  title: string;
  brand: string;
  price: number;
  old_price: number;
  rating?: number;
  description: string;
  specification: Specification;
  product_images: ProductImage[];
};
