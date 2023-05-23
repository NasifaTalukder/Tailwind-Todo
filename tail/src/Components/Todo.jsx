import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from '@mui/icons-material/Delete';

let Todo = ({ todo, selectId, delTodo }) => {
  return (
    <>
    <div>
    <div
      className="w-full flex flex-wrap mt-5 p-2 rounded bg-slate-200"
      onClick={() => selectId(todo.id)}
    >
      <div className="text-green-700 text-sm">
        <CheckCircleIcon />
      </div>
      <div className="flex flex-wrap">
        <p className="text-base ml-2">{todo.input}</p>       
      </div>
      <div className="">
          <button
            className="ml-[280px]"
            onClick={() => delTodo(todo.id)}
          >
            <DeleteIcon className="text-red-700" />
          </button>
        </div>
      
    </div>

        </div>
    </>
    
  );
};

export default Todo;
