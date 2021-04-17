import TaskDisplay from './TaskDisplay'

const Task = ({tasks, onDelete, reminder}) => {
    return (
        <>
          {tasks.map((task)=>(
              <TaskDisplay key={task.id} task={task} onDelete={onDelete} reminder={reminder} />
            ))}  
        </>
    )
}

export default Task
