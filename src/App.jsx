import { useState } from "react";
import "./App.css";
// Used for default export (e.g., export default User)
import User from "./User";

// Used for named export (e.g., export const Search = ...)
import { Search } from "./Search";

// Used for default export (e.g., export default Search)
// import Search from "./Search";

const list = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Ali Doe", age: 77 },
  { id: 3, name: "Samir Doe", age: 25 },
  { id: 4, name: "Fares Doe", age: 31 },
  { id: 5, name: "Taha Doe", age: 42 },
  { id: 6, name: "John Doe", age: 30 },
  { id: 7, name: "John Doe", age: 53 },
  { id: 8, name: "John Doe", age: 30 },
  { id: 9, name: "John Doe", age: 30 },
  { id: 10, name: "John Doe", age: 30 },
];
function App() {
  // State to store user input from search field
  const [search, setSearch] = useState("");

  // If search has a value, filter list by name (case-insensitive)
  // fitler expects a true or false return value
  // We can also use startsWith() instead of includes() for prefix match
  // Else, show full list
  let newList = search
    ? list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : list;
  // Alternatively, we can use this but this has a performance issue
  //  that its filtering even if the value of search is empty or null
  // let newList = list.filter((item) =>
  //   item.name.toLowerCase().includes(search.toLowerCase())
  // );
  return (
    <>
      <div className="header">
        {/* Search and User are made into components for reusability and cleaner code
           This keeps your main file simple and each component focused on one job */}
        <Search setSearch={setSearch} />

        {newList.map((item, index) => (
          // using map manipulates each item in the list and it can return it as a new component or object or as a number or as a string depends on your needs
          // Here we return a User component for each item in the list
          // Use item.id as key because it's unique and stable
          // Using index can cause bugs if the list changes (e.g., items added/removed)
          // Keys help React identify which items changed, are added, or removed
          // Using {...item} spreads all properties of item as separate props
          // Equivalent to writing user={item.user} age={item.age} id={item.id}
          // It's shorter and cleaner when passing many props

          <User {...item} key={item.id + ""} />

          // This is the longer form, useful if you want to control or rename props
          // <User user={item.user} age={item.age} id={item.id} key={item.id + ""} />
        ))}
      </div>
    </>
  );
}

export default App;
