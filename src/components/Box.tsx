import InputField from "./InputField"
import TodoContainer from "./TodoContainer"

const Box : React.FC = () => {
  return (
    <div className="min-w-[330px] max-w-[450px] w-full bg-white h-[560px] rounded-md flex flex-col items-center p-8">
      <h1 className="mb-4 text-blue-500 font-bold text-xl">Todo List</h1>
      <InputField />
      <TodoContainer /> 
    </div>
  )
}

export default Box