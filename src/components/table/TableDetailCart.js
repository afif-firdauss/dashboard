import Col from 'react-bootstrap/Col'
import DataTable from 'react-data-table-component';
import Row from 'react-bootstrap/Row';
import React, { useMemo } from 'react'

const TableDetailCart = ({ title, data, columns }) => {
  const noDataComponent = useMemo(() => {
    return <div className="mt-5">{'No Result'}</div>;
  }, []);

  return (
    <Col lg={9} md={12} className="table-data p-5">
      <h2 className='fs-4 fw-bold'>{title}</h2>

      <div className='mt-4'>
        <span>Details</span>

        <Row className='mt-4 table-data__details'>
          <Col lg={6} className="mb-3">
            <span>User ID: {data?.userId}</span>
          </Col>
          <Col lg={6}>
            <span># of Items: {data?.totalProducts}</span>
          </Col>
          <Col lg={6}>
            <span>Quantity: {data?.totalQuantity}</span>
          </Col>
          <Col lg={6}>
            <span>Total Amount: ${data?.total}</span>
          </Col>
        </Row>
      </div>

      <DataTable
        persistTableHead
        highlightOnHover
        noHeader={true}
        progressPending={!data?.products}
        data={data?.products}
        columns={columns}
        className="table dt-responsive table-custom"
        noDataComponent={noDataComponent}
        subHeader
        pagination={data?.products?.length > 10}
      />
    </Col>
  )
}

export default TableDetailCart