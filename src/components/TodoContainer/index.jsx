import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";
import { useState } from "react";

const TodoContainer = () => {
  const [activityArr, setActivityArr] = useState([{
    id: 1,
    activity: "Go for a walk"
  },
  {
    id: 2,
    activity: "Have Breakfast"
  }
  ])

  return (
    <section className="flex flex-wrap gap-5">
      <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
      <TodoList activityArr={activityArr} setActivityArr={setActivityArr} />
    </section>
  )
}

export default TodoContainer;