import { useState } from "react";
import { todosData } from "../../data/todosData";
import TodoList from "../../components/TodoList";
import Input from "components/Input";


export default function Home() {

  const [todoData, setTodoData] = useState(todosData);


  const addTask = (userInput) => {
    let copy = [...todoData];
    copy = [...copy, { id: todoData.length + 1, task: userInput, complete: false }];
    setTodoData(copy);
  }

  const handleToggle = (id) => {
    let mapped = todoData.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task };
    });
    setTodoData(mapped);
  }
//dave is awesome
  return (
    <div className="center">
      <h1>Todo List</h1>
      <Input addTask={addTask} />
      <TodoList todoData={todoData} />
    </div>
  )
}
