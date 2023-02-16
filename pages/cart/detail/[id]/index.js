import Layout from '@components/layout/Layout'
import TableDetailCart from '@components/table/TableDetailCart'
import { useMemo } from 'react'

export default function Cart({ cartDetail }) {
  const columns = useMemo(
    () => [
      {
        name: 'Product Name',
        selector: (row) => row?.title,
        minWidth: '120px',
        left: true,
        sortable: true,
      },
      {
        name: 'Price',
        selector: (row) => `$${row?.price}`,
        minWidth: '160px',
        sortable: true,
      },
      {
        name: 'Total Quantity',
        selector: (row) => row?.quantity,
        minWidth: '180px',
        sortable: true,
      },
      {
        name: 'Discounted Price',
        minWidth: '180px',
        selector: (row) => `$${row?.discountedPrice}` ?? '$ 0',
        sortable: true,
        wrap: true,
      }
    ],
    []
  );

  return (
    <Layout title='Dashboard - Cart Detail' sidebar="carts">
      <TableDetailCart title={`Carts ${cartDetail?.id}`} data={cartDetail} columns={columns} />
    </Layout>
  )
}

export async function getServerSideProps({ query }) {
  const { id } = query;

  const cartDetailRes = await fetch(`${process.env.API_URL}carts/${id}`);
  const cartDetail = await cartDetailRes.json();

  return {
    props: {
      cartDetail: cartDetail || null
    }
  };
}
