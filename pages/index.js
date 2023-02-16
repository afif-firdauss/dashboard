import Layout from '@components/layout/Layout'
import TableProducts from '@components/table/TableProducts';
import { useMemo } from 'react';

export default function Product({ products }) {
  const columns = useMemo(
    () => [
      {
        name: 'Product Name',
        selector: (row) => row?.title,
        minWidth: '120px',
        left: true,
        sortable: true
      },
      {
        name: 'Brand',
        selector: (row) => row?.brand,
        minWidth: '160px',
        sortable: true,
      },
      {
        name: 'Price',
        selector: (row) => `$${row?.price}`,
        minWidth: '180px',
        sortable: true,
      },
      {
        name: 'Stock',
        minWidth: '180px',
        selector: (row) => row?.stock ?? 0,
        sortable: true,
        wrap: true,
      },
      {
        name: 'Category',
        minWidth: '180px',
        selector: (row) => row?.category ?? '-',
        sortable: true,
        wrap: true,
      }
    ],
    []
  );

  return (
    <Layout title='Dashboard - Product' sidebar="products">
      <TableProducts title="Product List" data={products} columns={columns} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const productsRes = await fetch(`${process.env.API_URL}products?limit=0`);
  const products = await productsRes.json();

  return {
    props: {
      products: products.products || null
    }
  };
}
