import { AiFillEdit, AiFillCheckCircle } from 'react-icons/ai';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteTodo, editStatus, editTodoName } from '../slice/todolist';
import { useState } from 'react';

interface Props {
  id: number;
  name: string;
  isDone: boolean;
}

const Task = ({ id, name, isDone } : Props ) => {

  const dispatch = useDispatch();
  const [newTodoName, setNewTodoName] = useState<string>('');
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  const deleteTask = () => {
    dispatch(deleteTodo({ id }));
  };

  const changeName = (e : React.FormEvent) => {
    e.preventDefault();
    if (!newTodoName) return;
    dispatch(editTodoName({ id, newName: newTodoName }));
    setShowEditModal(false);
    setNewTodoName('');
  }

  const closeModal = () => {
    setShowEditModal(false);
    setNewTodoName('');
  }

  return (
    <div className="flex justify-between items-center w-full border min-h-[50px] text-blue-500 px-3">
      <p className={`font-bold text-base max-w-[100px] lg:text-xl md:max-w-[200px] truncate ${isDone ? 'text-green-500' : 'text-inherit'}`}>{name}</p>
      <div className="flex gap-x-4 h-full items-center">
        {!isDone && 
          <>
            <AiFillCheckCircle 
              className="text-xl cursor-pointer hover:scale-125 transition-transform"
              onClick={() => dispatch(editStatus({ id }))}
            />
            <AiFillEdit 
              className="text-xl cursor-pointer hover:scale-125 transition-transform" 
              onClick={() => setShowEditModal(true)}
            />
          </>
        }  
        <BsFillTrash3Fill 
          className="text-base cursor-pointer hover:scale-125 transition-transform" 
          onClick={deleteTask}  
        />
      </div>
      <div 
        className={`${showEditModal ? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} fixed inset-0 flex 
        items-center justify-center bg-[#32323280] transition-opacity`}
        onClick={closeModal}
      >
        <div className={`bg-white max-w-[300px] w-full rounded-[4px]`}>
          <form className={`${showEditModal ? 'translate-y-0' : 'translate-y-36'} flex flex-col px-5 py-5 gap-y-3 items-center  transition-transform`}
            onSubmit={changeName}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='w-full flex flex-col gap-y-1'>
              <label htmlFor="newTodo" 
                className='after:content-["*"] after:text-red-500 after:ml-1 text-sm'
              >Enter new name</label>
              <input 
                id='newTodo'
                type="text" 
                className='border flex-1 px-4 py-2 border-blue-500 text-sm rounded-sm focus:outline-none'
                value={newTodoName} 
                onChange={(e) => setNewTodoName(e.target.value)}
              />
            </div>
            <div className='flex gap-x-3'>
              <button 
                className='bg-blue-500 text-white px-3 py-1 rounded-[3px] hover:scale-110 transition-transform 
                active:scale-95 text-sm'
              >Update</button>
              <button 
                className='bg-red-500 text-white px-3 py-1 rounded-[3px] hover:scale-110 transition-transform 
                active:scale-95 text-sm'
                type='button'
                onClick={closeModal}
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Task