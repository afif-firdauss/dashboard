import Layout from '@components/layout/Layout'
import TableCarts from '@components/table/TableCarts'
import { useMemo } from 'react'

export default function Cart({ carts }) {
  const columns = useMemo(
    () => [
      {
        name: 'User ID',
        selector: (row) => row?.userId,
        minWidth: '120px',
        left: true,
        sortable: true,
      },
      {
        name: 'Total Products',
        selector: (row) => row?.totalProducts,
        minWidth: '160px',
        sortable: true,
      },
      {
        name: 'Total Quantity',
        selector: (row) => row?.totalQuantity,
        minWidth: '180px',
        sortable: true,
      },
      {
        name: 'Total Discounted',
        minWidth: '180px',
        selector: (row) => row?.discountedTotal ?? 0,
        sortable: true,
        wrap: true,
      }
    ],
    []
  );

  return (
    <Layout title='Dashboard - Cart' sidebar="carts">
      <TableCarts title="Carts" data={carts} columns={columns} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const cartsRes = await fetch(`${process.env.API_URL}carts`);
  const carts = await cartsRes.json();

  return {
    props: {
      carts: carts.carts || null
    }
  };
}
