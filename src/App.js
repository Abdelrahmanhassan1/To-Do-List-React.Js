// first write basic App.js
// then its styles
// then write ToDoItem.js
// then its styles
// then write AddButton.js and deleteButton.js
// then its styles
// then set animation to remove

import "./App.css";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import AddButton from "@mui/icons-material/Add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState(["Read Quran", "Learn React"]);
  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    if (todo === "") {
      toast.error("Please Enter Non-Empty Text..", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      event.preventDefault();
      setItems([...items, todo]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add Todo...."
          onChange={handleChange}
          value={todo}
        />
        <button onClick={handleSubmit}>
          <AddButton />
        </button>
      </div>
      <div className="todo-items">
        {items.map((item, index) => {
          return <ToDoItem key={index} text={item} />;
        })}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
