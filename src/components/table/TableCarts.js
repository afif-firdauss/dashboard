import Col from 'react-bootstrap/Col'
import DataTable from 'react-data-table-component';
import React, { useMemo } from 'react'
import { useRouter } from 'next/router';

const TableCarts = ({ title, data, columns }) => {
  const router = useRouter();

  const noDataComponent = useMemo(() => {
    return <div className="mt-5">{'No Result'}</div>;
  }, []);

  return (
    <Col lg={9} md={12} className="table-data p-5">
      <h2 className='fs-4 fw-bold'>{title}</h2>

      <DataTable
        persistTableHead
        highlightOnHover
        noHeader={true}
        progressPending={!data}
        data={data}
        columns={columns}
        className="table dt-responsive table-custom-pointer"
        noDataComponent={noDataComponent}
        onRowClicked={(row) => router.push(`/cart/detail/${row?.id}`)}
        fixedHeader={true}
        fixedHeaderScrollHeight={300}
        pagination={data?.length > 10}
      />
    </Col>
  )
}

export default TableCarts