import { useEffect, useState } from "react";
const colors = ["red", "green", "blue", "yellow", "purple"];
function User({ id, name, age }) {
  const [darkMode, setDarkMode] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const changeColor = () =>
    setColorIndex((index) => (index == colors.length - 1 ? 0 : index + 1));
  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       changeColor();
  //     }, 2000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }, []);

  return (
    <>
      <div
        className="user"
        style={{ backgroundColor: colors[colorIndex] }}
        onClick={() => {
          changeColor();
        }}
      >
        <h1 className="name">{name}</h1>
        <h4 class="age">{age}</h4>
      </div>
    </>
  );
}
export default User;
