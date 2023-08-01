import { useSelector } from "react-redux";
import { Todo } from "../todoModel";
import Task from "./Task";

interface State {
  todo: Todo[];
}

const TodoContainer = () => {

  const todoList = useSelector<State, Todo[]>((state : State) => state.todo);

  return (
    <div className="flex flex-col items-center flex-1 w-full border p-3 gap-y-2 overflow-y-scroll">
      {
        todoList.map((todo : Todo) => {
          return (
            <Task 
              key={todo.id}
              id={todo.id}
              name={todo.name}
              isDone={todo.isDone} 
            />
          );
        })
      }
    </div>
  )
}

export default TodoContainer