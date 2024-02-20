import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionsTypes } from "../redux/actionTypes/acttionTypes";
import { deleteTodo, updateTodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleIsDone = () => {
    const updated = { ...todo, is_done: !todo.is_done };

    axios
      .put(`/todos/${updated.id}`, updated)
      .then(dispatch(updateTodo(updated)));
  };

  const handleDelete = () => {
    axios.delete(`/todos/${todo.id}`).then(() => dispatch(deleteTodo(todo.id)));
  };
  return (
    <div className=" border shadow shadow-lg p-4 my-5 ">
      <h5>{todo.text}</h5>
      <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>
      <p>{todo.created_at}</p>
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        Düzenle
      </button>
      <button onClick={toggleIsDone} className="mx-3 btn btn-success">
        {todo.is_done ? "Devam Ediyor" : "Tamamlandı"}
      </button>
      <button onClick={handleDelete} className="btn btn-danger">
        Sil
      </button>

      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
