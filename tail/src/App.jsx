import './App.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TodoHeader from './Components/TodoHeader';
import TodoInput from './Components/TodoInput';
import Todo from './Components/Todo';
import DataSheet from "./Data/DataSheet";

function App() {
  return (
    <>
    <div className="w-full h-auto">
    <div className='w-96 h-[450px] m-auto rounded p-5 bg-red-400'>

     {/* ----Todo Header---- */}
     <TodoHeader/>
     {/* --------Todo Input----- */}
     <TodoInput/>
      <div>
    {/* -----todo----- */}
       {/* <Todo/> */}
       {DataSheet.map((d) => (
                 <Todo data={d} />
                    ))}

        {/* <div className='w-full flex flex-wrap mt-4 p-2 rounded bg-slate-200'>
        <div className='text-green-700 text-sm'>
        <CheckCircleIcon/>
        </div>

        <div>
          <p className='text-base ml-2'>Wordpress Website seo complete</p>
        </div>
        </div>

        <div className='w-full flex flex-wrap mt-4 p-2 rounded bg-slate-200'>
        <div className='text-green-700 text-sm'>
        <CheckCircleIcon/>
        </div>

        <div>
          <p className='text-base ml-2'>Wordpress Website seo complete</p>
        </div>
        </div>

        <div className='w-full flex flex-wrap mt-4 p-2 rounded bg-slate-200'>
        <div className='text-green-700 text-sm'>
        <CheckCircleIcon/>
        </div>

        <div>
          <p className='text-base ml-2'>Wordpress Website seo complete</p>
        </div>
        </div>

        <div className='w-full flex flex-wrap mt-4 p-2 rounded bg-slate-200'>
        <div className='text-green-700 text-sm'>
        <CheckCircleIcon/>
        </div>

        <div>
          <p className='text-base ml-2'>Wordpress Website seo complete</p>
        </div>
        </div> */}

      </div>

     </div>
    </div>
    
     
    </>
  )
}

export default App
