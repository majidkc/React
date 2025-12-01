import React, {useState} from "react"
function ToDoList(){

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i)=> i !== index)
        setTasks(updatedTasks)

    }

function moveTaskUp(index){
  if(index > 0){
    const newList = [...tasks];
    [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];
    setTasks(newList);
  }
}


  function moveTaskDown(index){
  if(index < tasks.length - 1){
    const newList = [...tasks];
    [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];
    setTasks(newList);
  }
}


    return(
        <div className="to-do-list">    
        <h1>To-Do List</h1>
            <div>
                <input 
                type="text" 
                placeholder="Enter a task..." 
                value={newTask}
                onChange={handleInputChange}
              />
                <button
                className="add-button"
                onClick={addTask}
                >

                    add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}> 
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>deleteTask(index)}> Delete</button>
                    <button className="up-button" onClick={()=>moveTaskUp(index)}> Up</button>
                    <button className="down-button" onClick={()=>moveTaskDown(index)}> Down</button>

                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList