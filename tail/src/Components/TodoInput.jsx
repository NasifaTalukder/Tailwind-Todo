import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const TodoInput = ({inputHandle, submitHandle, userInput}) => {
  return (
    <div>
      <form  className='flex'>
        <input type="text" placeholder='Add New Todo..' className='w-full p-2 rounded-sm' value={userInput} onChange={inputHandle} />
        <button className='ml-[400px] overflow-hidden pl-1 pr-1 bg-green-400 rounded absolute mt-[6px]' onClick={submitHandle}><AddIcon className='text-white'/></button>
      </form>
      </div>
  )
}

export default TodoInput
