import { useState } from "react";
import "./App.css";
import User from "./User";
import Search from "./Search";

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
  const [search, setSearch] = useState("");
  let newList = search
    ? list.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : list;
  return (
    <>
      <div className="header">
        <Search setSearch={setSearch} />
        {newList.map((item) => (
          <User {...item} key={item.id + ""} />
        ))}
      </div>
    </>
  );
}

export default App;
