export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  image: string;
};

export type ProductPrices = { [key: number]: number }