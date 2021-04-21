import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Task from './components/Task'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  const [showAddTask, setShowAddTask]=useState(false);

  const [tasks , setTasks ] = useState([])

  useEffect(()=>{
    const fetchTasks = async()=>{
      const res= await fetch('http://localhost:5000/tasks')
      const data= await res.json();
      setTasks(data)
    }
    fetchTasks();
  },[])

  //Fetching a single data
  const fetchTask = async(id)=>{
    const res= await fetch( `http://localhost:5000/tasks/${id}`)
    const data= await res.json();
    return data;
  }

  const onAdd=async(task)=>{
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(task)
    })
    const newTask =await res.json();
    setTasks([...tasks,newTask])
  } 

  const deleteTasks = async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'});
    setTasks(tasks.filter((task)=> task.id!==id ))
  }

  const toggleReminder=async(id)=>{
      const element= await fetchTask(id);
      const updateRem = {...element, reminder :!element.reminder}

      const res= await fetch(`http://localhost:5000/tasks/${id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(updateRem)
      })
      
      const data = await res.json();

      setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: data.reminder }:task ))
  }
  
  return (
      <Router>
        <div className="container">
            <Header onAdd={()=>setShowAddTask(!showAddTask) } showAdd={showAddTask} />
            <Route path='/' exact render={(props)=>(
              <>
                {showAddTask && <AddTask onAdd={onAdd} />} 
                { tasks.length > 0 ? <Task tasks={tasks} onDelete ={deleteTasks} reminder={toggleReminder} /> : "No pending task"}
              </>
            )} />
            <Route path='/about'component={About}/>
            <Footer />  
        </div>
      </Router>
    );
}

export default App;
