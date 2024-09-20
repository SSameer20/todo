import {useState} from 'react'
import './App.css'
import { Input } from "@nextui-org/input";
import { Button } from '@nextui-org/react';
import { Todo } from './componnets/interface';

// import CardItem from './componnets/Card';


function App() {
  const [input, setInput] = useState<string>('');
  const [todo, setTodo] = useState<Todo[]>([])

  const handleAdd = () => {
    if(input.trim()){
      let task : Todo  = {
        id :  Math.floor(Math.random() * (9999 - 1000 + 1) + 1000),
        title : input,
        time: new Date().toLocaleTimeString()
      }
      setInput('');
      setTodo([...todo, task]);
    }
  }

  const handleDelete = (item : Todo) : void => {
    let newList = todo.filter((task) => task.id !== item.id)
    setTodo([...newList])
  }


  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-zinc-900 text-slate-50 p-20'>
        <span className='text-4xl font-semibold'>TODO Application</span>
        <div className='flex flex-col w-2/3 h-2/3 py-5 gap-10 justify-start items-center'>

              <div className='flex flex-row gap-5 w-2/3'>
                    <Input
                      type="text"
                      placeholder="Add Task" 
                      value={input} 
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <Button 
                        color="primary" 
                        onClick={handleAdd}
                    >   Add </Button>
              </div>

              <div className='w-2/3 list flex flex-col gap-5 justify-start items-center'>
                {
                  todo.map((item) => {
                    return <div key={item.id} className='flex flex-row w-2/3 justify-around items-center'>
                      <span>{item.title}</span>
                      <span>{item.time}</span>
                      <Button color="danger" onClick={() => handleDelete(item)}>Delete</Button>
                    </div>
                  })
                }
              </div>   
        </div>
    </div>
  )
}

export default App
