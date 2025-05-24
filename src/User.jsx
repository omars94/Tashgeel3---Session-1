import { useEffect, useState } from "react";

const colors = ["red", "green", "blue", "yellow", "purple"];

function User({ id, name, age }) {
  // Destructuring props: instead of writing props.id, props.name, etc.
  // We extract them directly for cleaner and shorter code
  // Equivalent to: function User(props) { const { id, name, age } = props; }

  // Toggle between dark and light mode
  const [darkMode, setDarkMode] = useState(false);

  // Index for selecting a color from the colors array
  const [colorIndex, setColorIndex] = useState(0);

  // Function to move to the next color
  // If we're at the end of the array, go back to 0
  // we create this function to avoid repeating the logic in multiple places
  // same logic as creating a new component for reusability
  const changeColor = () =>
    setColorIndex((index) => (index === colors.length - 1 ? 0 : index + 1));
  // Same logic could also use modulo:
  // setColorIndex((index) => (index + 1) % colors.length);

  // Example of how to change colors automatically every 2 seconds
  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     changeColor(); // update the colorIndex every 2 seconds
  //   }, 2000);
  // 🧹 Cleanup function:
  // Runs when the component is removed (unmounted) OR before re-running this effect
  // Prevents memory leaks and multiple intervals running at once
  //   return () => {
  //     clearInterval(interval); // clean up to avoid memory leaks
  //   };
  // }, []);  👈 empty dependency array means this runs only once when the component mounts
  // }, [colorIndex]);  ⚠️ This will create a new interval every time colorIndex changes its important here to use the cleanup function
  // Every time colorIndex updates, useEffect runs again.
  // So it sets another interval, and the previous one is cleared.
  // ✅ Best practice:
  // Use [] if you only want the effect to run once.
  // Only add dependencies if the effect depends on their changing value.
  // For intervals, you usually don’t want it to re-run on state changes — so keep [].

  // ⚠️ Important:
  // Putting setInterval or expensive functions *directly* in render (like outside useEffect) is dangerous.
  // It will run every render and create performance issues or bugs.
  // Always use useEffect for side effects like intervals, API requests, etc.

  return (
    <>
      <div
        className="user"
        style={{
          backgroundColor: darkMode ? "black" : "white", // dark/light mode backgroud
          backgroundColor: colors[colorIndex], // background changes based on selected color,
        }}
        onClick={() => {
          changeColor(); // manual color change on click
          //toggle between dark and light mode
          // setDarkMode((darkMode) => !darkMode);
          // The 'darkMode' here is NOT the variable from above (the one declared with useState)
          // It's just a local parameter passed into the function by React
          // React automatically gives you the *current state value* as an argument when you use this form
          // This avoids bugs from outdated state values when updates are batched or asynchronous

          // 🔍 Scope explanation:
          // Even though the variable above is also called 'darkMode', this function parameter is local
          // It exists only inside this arrow function — and does NOT conflict with the outer one
          // You can even rename it to make it clearer:
          setDarkMode((prevDarkMode) => !prevDarkMode);
        }}
      >
        <h1 className="name">{name}</h1>
        <h4 className="age">{age}</h4>
      </div>
    </>
  );
}

export default User;
