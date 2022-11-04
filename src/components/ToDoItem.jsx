import React from "react";
import "./ToDoItem.css";
import DeleteButton from "@mui/icons-material/Delete";
import DoneButton from "@mui/icons-material/Check";
import ClearButton from "@mui/icons-material/Clear";

function ToDoItem(props) {
  const checkRef = React.createRef();
  const [isDone, setIsDone] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const handleChecked = () => {
    checkRef.current.classList.toggle("checked");
    setIsDone(!isDone);
  };
  const handleDelete = () => {
    checkRef.current.classList.add("delete");
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };
  return (
    visible && (
      <div className="todo-item " ref={checkRef}>
        <h1>{props.text}</h1>
        <div className="buttons">
          <button onClick={handleChecked}>
            {isDone ? <ClearButton /> : <DoneButton />}
          </button>
          <button onClick={handleDelete}>
            <DeleteButton />
          </button>
        </div>
      </div>
    )
  );
}

export default ToDoItem;
