import React,{useState} from 'react'
function ToDoList(){
    const [task,setTasks]=useState([]);
    const [newTask,setNewTasks]=useState('');
    function handleInputChange(event){
        setNewTasks(event.target.value);

    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTasks("");
        }

    }
    function deleteTask(index){
        const updated=task.filter((_,i)=> i!== index);
        setTasks(updated);
    }
    function moveTask(index){
        if(index>0){
            const updated=[...task];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            setTasks(updated);
        }


    }
    function downTask(index){
         if(index<task.length-1){
            const updated=[...task];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
            setTasks(updated);
        }


    }
    return(
        
        <div className="to-do-list">
            <h1>T0-do-List</h1>
            <div>
                <input type='text' placeholder='enter the task...'
                    value={newTask}
                    onChange={handleInputChange}/>
                    <button className="add-button" onClick={addTask}>
                        add</button>
            </div>
                
        <ol>
                     {task.map((task,index) =>
                          <li className="text">
                           <span className="text">{task}</span>
                            <button className="delete-button" onClick={()=>deleteTask(index)}>delete</button>
                            
                            <button className="move" onClick={()=>moveTask(index)}>up</button>
                            <button className="down" onClick={()=>downTask(index)}>Down</button>
                         </li>
                    )}

                </ol> 
       
        </div>

    );
}
 export default ToDoList;