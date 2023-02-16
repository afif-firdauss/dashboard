import Col from 'react-bootstrap/Col'
import DataTable from 'react-data-table-component';
import FilterComponent from './FilterComponent';
import React, { useMemo, useState } from 'react'

const TableProducts = ({ title, data, columns }) => {
  const [filterText, setFilterText] = useState('');

	const filteredItems = data.filter(
		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
	);

	const subHeaderComponentMemo = useMemo(() => {
		return (
			<FilterComponent onFilter={e => setFilterText(e.target.value)} filterText={filterText} />
		);
	}, [filterText]);

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
        data={filteredItems}
        columns={columns}
        className="table dt-responsive table-custom"
        noDataComponent={noDataComponent}
        subHeaderComponent={subHeaderComponentMemo}
        fixedHeader={true}
        fixedHeaderScrollHeight={300}
        subHeader
        pagination={data?.length > 10}
      />
    </Col>
  )
}

export default TableProducts