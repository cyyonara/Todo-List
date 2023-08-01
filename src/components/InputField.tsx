import { useState } from "react";
import { add } from "../slice/todolist";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../todoModel";

interface State {
  todo: Todo[]
}

const InputField : React.FC = () => {

  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>('');
  const todoList = useSelector<State, Todo[]>((state : State) => state.todo);
  console.log(todoList);

  const onSubmit = (e : React.FormEvent) => {
    e.preventDefault();
    if(!newTodo) return;
    dispatch(add({
      id: todoList.length ? todoList[todoList.length -1].id + 1 : 1,
      name: newTodo,
      isDone: false
    }));
    setNewTodo('');
  };

  return (
    <form className="flex items-center gap-x-3 w-full mb-5"
      onSubmit={onSubmit}
    >
      <input type="text" placeholder="Add new..." 
        className="border border-blue-500 flex-1 w-0 px-3 py-2 rounded-[4px] focus:outline-none text-blue-500 text-sm"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white font-semibold px-3 py-[7px] rounded-[4px] transition-transform hover:scale-110 active:scale-90"
      >ADD</button>
    </form>
  )
}

export default InputField