const Search = (props) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        height: 50,
        width: 200,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
      onChange={(event) =>
        props.setSearch((prev) => {
          if (prev !== event.target.value) {
            return event.target.value;
          } else {
            return prev;
          }
        })
      }
    />
  );
};
const placeholder = "Search";
const changeFunction = () => {};
const show = false;
export default Search;
export { Search, placeholder, changeFunction, show };
