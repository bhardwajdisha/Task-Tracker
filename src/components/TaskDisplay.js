import {FaTimes} from 'react-icons/fa'

const TaskDisplay = ({task, onDelete, reminder}) => {
    return (
        <div className= {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={()=>reminder(task.id)}>
            <h3>{task.text} <FaTimes style={{color:'red' , cursor: 'pointer'}} onClick={()=>onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default TaskDisplay
