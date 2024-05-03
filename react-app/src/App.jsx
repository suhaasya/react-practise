import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

const CACHE = {};

function App() {
  const [todos, setTodos] = useState();

  async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setTodos(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {todos?.map((todo) => (
        <Card title={todo.title} body={todo.body} key={todo.id} />
      ))}
    </>
  );
}

export default App;
