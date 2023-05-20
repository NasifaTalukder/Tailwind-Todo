import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Todo = ({data}) => {
  return (
    <div className='w-full flex flex-wrap mt-5 p-2 rounded bg-slate-200'>
    <div className='text-green-700 text-sm'>
    <CheckCircleIcon/>
    </div>
    <div>
      <p className='text-base ml-2'>{data.Todo1}</p>
    </div>
    </div>
  )
}

export default Todo
