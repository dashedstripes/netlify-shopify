import Layout from '@/components/Layout';
import { Product } from '@/types';
import { getAllProducts } from '@/utils/shopify';
import Link from 'next/link';

export default function Home({ products }: { products: Product[] }) {
  return (
    <Layout>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => {
            const product = p.node;
            const image = product.images.edges[0].node;
            return (
              <Link href={`/products/${product.handle}`} key={product.id} className="bg-white p-4 shadow-md rounded-md">
                <img
                  src={image.src}
                  alt={image.altText}
                  className="w-full h-auto rounded-md"
                />
                <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>

                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </Link>
            )
          })}
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const products = await getAllProducts();

    return {
      props: {
        products: products.body.data.products.edges || []
      }
    }
  } catch (err) {
    console.error(err);
    return {
      props: {
        products: []
      }
    }
  }
}