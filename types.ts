export type Product = {
  id: number;
  title: string;
  description: string;
  slug: string;
  price: number;
  image: string;
};

export type ProductPrices = { [key: number]: number }