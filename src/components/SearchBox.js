const SearchBox = ({onSearchChange, searchfield}) => {
  return (
    <div>
      <input
        onChange={onSearchChange}
        className="pa3 ma2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
      />
    </div>
  );
};

export default SearchBox;
