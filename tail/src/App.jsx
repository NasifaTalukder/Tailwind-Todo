import './App.css'
import TodoHeader from './Components/TodoHeader';
import TodoInput from './Components/TodoInput';
import Todo from './Components/Todo';
import { useState } from 'react';



function App() {
  const[input,setInput]=useState("");
  const[value,setValue]=useState([]);
  let[idNo,setIdNo]=useState(1);

const inputHandle=(e)=>{
  setInput(e.target.value)
}

const submitHandle=(e)=>{
  e.preventDefault();
  setValue((preValue)=>{
    return[...preValue,{input,id:idNo}]
  });
  setIdNo(idNo+1)
  setInput(" ")
}
let todoCheck=(id)=>{
  
}

let deleteTodo=(id)=>{
    let filteredData=value.filter((todo)=> todo.id!==id);
    console.log(filteredData)
    setValue(filteredData)
}

  return (
    <>
    <div className="w-full h-auto">
    <div className='w-[500px] h-[550px] m-auto rounded p-5 bg-red-400 overflow-scroll'>

     {/* ----Todo Header---- */}
     <TodoHeader/>
     {/* --------Todo Input----- */}
     <TodoInput userInput={input} inputHandle={inputHandle} submitHandle={submitHandle}/>
      <div>
    {/* -----todo----- */}
       {/* <Todo/> */}
       {/* {DataSheet.map((d) => (
                 <Todo data={d} />
                    ))} */}
      {
      value.map((todo)=>{
        return(
          <Todo todo={todo} key={todo.id} selectId={todoCheck} delTodo={deleteTodo}/>
        )
         
      })
     
    }
    {/* {
        console.log(value,idNo)
    } */}
   

      </div>
     </div>
    </div>
  
    </>
  )
}

export default App
