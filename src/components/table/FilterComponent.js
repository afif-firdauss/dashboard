const FilterComponent = ({ filterText, onFilter }) => {
  return (
    <input       
      id="search"
      type="text"
      placeholder="Search product..."
      value={filterText}
      onChange={onFilter}
      className="filter-data"
    />
  )
}

export default FilterComponent