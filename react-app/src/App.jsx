import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card, { num, Card2 } from "./components/card/Card";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText(value);
  };

  const handleClick = () => {
    setTodos((prev) => [...prev, text]);
    setText("");
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  console.log(localStorage.getItem("todos"));

  return (
    <>
      <input onChange={handleChange} name="text1" value={text} />

      <button onClick={handleClick}>add</button>

      <ul>
        {todos?.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
