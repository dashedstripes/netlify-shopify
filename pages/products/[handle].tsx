import Layout from '@/components/Layout';
import { Product } from '@/types';
import { getAllProducts } from '@/utils/shopify';

export default function Product({ product }: { product: Product }) {
  const image = product.images.edges[0].node;
  return (
    <Layout>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
        <img
          src={image.src}
          alt={image.altText}
          className="product-page-image"
        />
      </div>
      <div className="product-copy">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  let routes = products.body.data.products.edges.map((p: any) => {
    return { params: { handle: p.node.handle }};
  });

  console.log(routes)

  return { paths: routes, fallback: false };
}

export async function getStaticProps({ params }: any) {
  try {
    const products = await getAllProducts();

    let product = products.body.data.products.edges?.find((p: any) => {
      return p.node.handle === params.handle;
    });
  
    return {
      props: {
        product: product.node
      }
    }
  } catch (err) {
    console.error(err);
    return {
      props: {
        product: {}
      }
    }
  }
}