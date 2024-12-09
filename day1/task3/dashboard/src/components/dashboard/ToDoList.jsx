import React, { useState, useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.payload,
        },
      ];
    case "EDIT_TASK":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, task: action.payload.newTask }
          : todo
      );
    case "DELETE_TASK":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoValue, setTodoValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const addTodo = () => {
    if (todoValue.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: todoValue });
    setTodoValue("");
  };

  const editTodo = (id, task) => {
    setEditId(id);
    setEditValue(task);
  };

  const saveEdit = () => {
    if (editValue.trim() === "") return;
    dispatch({ type: "EDIT_TASK", payload: { id: editId, newTask: editValue } });
    setEditId(null);
    setEditValue("");
  };

  const handleChange = (e) => setTodoValue(e.target.value);

  return (
    <div className="container mt-4">
      <h4>To-Do List</h4>
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Enter Task
        </label>
        <input
          type="text"
          id="task"
          name="task"
          className="form-control"
          value={todoValue}
          onChange={handleChange}
        />
        <button className="btn btn-primary mt-2" onClick={addTodo}>
          Add
        </button>
      </div>
      <div>
        {state.length > 0 &&
          state.map((todo) => (
            <ul key={todo.id} className="list-group mb-2">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                {editId === todo.id ? (
                  <>
                    <input
                      type="text"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="form-control me-2"
                    />
                    <button
                      className="btn btn-success"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span>{todo.task}</span>
                    <div>
                      <button
                        className="btn btn-warning me-2"
                        onClick={() => editTodo(todo.id, todo.task)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({ type: "DELETE_TASK", payload: todo.id })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};
