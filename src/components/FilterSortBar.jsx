function FilterSortBar({
  showGreasedOnly,
  setShowGreasedOnly,
  setSortBy
}) {
  return (
    <div className="ui form">

      <div className="field">
        <div className="ui checkbox">
          <input
            id="show-greased"
            type="checkbox"
            checked={showGreasedOnly}
            onChange={() => setShowGreasedOnly(!showGreasedOnly)}
          />
          <label htmlFor="show-greased">
            Greased Pigs Only?
          </label>
        </div>
      </div>

      <div className="field">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

    </div>
  );
}

export default FilterSortBar;