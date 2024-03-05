import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos && todos.length === 0) {
      setTodos((prevTodos) => [...prevTodos, ...storedTodos]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addOrUpdateTodo = () => {
    if (selectedTodo) {
      const updatedTodos = todos.map((todo) =>
        todo.id === selectedTodo.id ? { ...todo, task } : todo
      );
      setTodos(updatedTodos);
      setSelectedTodo(null);
    } else {
      if (task.trim() !== "") {
        setTodos([...todos, { id: Date.now(), task }]);
      }
    }
    setTask("");
  };

  const updatedTodo = (id) => {
    const todoToUpdate = todos.find((todo) => todo.id === id);
    setTask(todoToUpdate.task);
    setSelectedTodo(todoToUpdate);
  };

  const deleteTodo = (id) => {
    console.log("Deleting todo with id:", id);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log("Updated Todos:", updatedTodos);
    setTodos([...updatedTodos]);
    if (selectedTodo && selectedTodo.id === id) {
      setSelectedTodo(null);
    }
  };

  return (
    <div className="h-screen bg-purple-600">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 mt-24 text-white">TODO APP</h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="p-2 border border-gray-300 mr-2 w-96 rounded"
          />
          <button
            onClick={addOrUpdateTodo}
            className="p-2 bg-lime-700 text-white w-20 rounded text-base hover:bg-lime-500"
          >
            {selectedTodo ? "Update" : "Add"}
          </button>
        </div>
        <ul className="mt-6">
          {todos.map((todo) => (
            <li key={todo.id} className="mb-2">
              <div
                className="bg-lime-900 bg-opacity-50 border-b-2 border-l-2 border-orange-500 rounded p-2 flex items-center justify-between"
                style={{ width: "450px" }}
              >
                <span className="text-lg text-white ">{todo.task}</span>
                <div className="flex">
                  <button
                    onClick={() => updatedTodo(todo.id)}
                    className="mr-2 p-1 bg-blue-800 w-20 text-white rounded hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-1 bg-red-800 text-white rounded w-20 hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
