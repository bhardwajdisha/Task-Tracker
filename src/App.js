import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {
  const [showAddTask, setShowAddTask]=useState(false);
  const [tasks , setTasks ] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th',
        reminder:true
    },
    {
        id:2,
        text: 'Meeting at School',
        day: 'Feb 6th',
        reminder:true,
    },
    {
        id:3,
        text: 'Food Shopping',
        day: 'Feb 5th',
        reminder : false,
    }
])

const onAdd=(task)=>{
  const id = Math.floor(Math.random()*1000)+1
  const newTask = {id,...task}
  setTasks([...tasks,newTask])
}
const deleteTasks = (id)=>{
  setTasks(tasks.filter((task)=> task.id!==id ))
}

const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder }:task ))
}
  return (
    <div className="container">
        <Header onAdd={()=>setShowAddTask(!showAddTask) } showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={onAdd} />} 
        { tasks.length > 0 ? <Task tasks={tasks} onDelete ={deleteTasks} reminder={toggleReminder} /> : "No pending task"}
        
    </div>
  );
}

export default App;
