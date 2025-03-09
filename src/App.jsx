
import{ useState, useEffect } from "react";
import Todoinput from "./Components/Todoinput";
import TodoList from "./Components/TodoList";

function App() {
  const[todos, setTodos] = useState([
  ])

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:
      newList
    }))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodo(index, newTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo, todoIndex) =>
        todoIndex === index ? newTodo : todo
      )
    );
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <Todoinput handleAddTodos = {handleAddTodos} />
      <TodoList handleEditTodo = {handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  )
}

export default App

// export default function App() {
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <p>If you see this, React is working.</p>
//       <Todoinput />
//     </div>
//   );
// }
