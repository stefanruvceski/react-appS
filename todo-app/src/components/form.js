import { useState } from "react";
import { useGlobalContext } from "../context";

const MyForm = () => {
  const {
    state: { todos },
    postOne,
  } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo) {
      const _todo = { id: todos.length, name: todo, isDone: false };

      postOne(_todo);
      setTodo("");
    }
  };

  const [todo, setTodo] = useState("");
  return (
    <form name="from" onSubmit={handleSubmit}>
      <div className=" itm2 card">
        <div className=" card-header ">
          <h5>Add new Todo</h5>
        </div>
        <div className="p-2 input-group input-group-lg">
          <input
            type="text"
            className="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            name="todo"
            id="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className="row justify-content-md-center mb-2">
          <button
            type="submit"
            className="justify-content-md-center col-3 btn btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default MyForm;
