import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function sleep(seconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

export default function Home({ products: initialProducts }: { products: Product[] }) {
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    // Function to fetch prices on the client side
    async function fetchPrices() {
      try {
        const updatedProducts = await Promise.all(
          products.map(async (product) => {
            await sleep(2);
            product.price = 10;
            return product;
          })
        );

        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error fetching prices:', error);
      }
    }

    fetchPrices();
  }, [products]);

  return (
    <Layout>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md rounded-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>

              {!product.price ? (
                <div className='w-10 h-5 rounded bg-slate-300 animate-pulse'></div>
              ) : (
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              )}

              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export function getStaticProps() {
  const products = [
    {
      id: 1,
      name: 'T-shirt',
      price: 0,
      image: '/tshirt.jpg',
    },
    {
      id: 2,
      name: 'Canvas Bag',
      price: 0,
      image: '/bag.jpg',
    },
  ];

  return {
    props: {
      products
    }
  }
}