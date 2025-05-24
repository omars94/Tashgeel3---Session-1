const Search = (props) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      style={{
        height: 50,
        width: 200,
        // border width can help you a lot to check the display of the element
        // and helps you debug display issues
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
      }}
      // onChange runs when the user types something
      onChange={
        (event) =>
          // setSearch is passed as a prop from the parent component
          props.setSearch((prev) => {
            // 'prev' is the previous value of the search state we can name it anything we want
            //such as oldValue or previousSearch or a,b,c
            // React gives us the old value because state updates are asynchronous
            // This ensures we compare correctly before updating
            if (prev !== event.target.value) {
              return event.target.value; // Only update if the new value is different
            } else {
              return prev; // Avoid unnecessary updates
            }
          })
        // or we can simply set the value like that
        // props.setSearch(event.target.value)
      }
    />
  );
};

// example for how to use export
const placeholder = "Search";
export const changeFunction = () => {};
const show = false;
export default Search;
export { Search, placeholder, show };
