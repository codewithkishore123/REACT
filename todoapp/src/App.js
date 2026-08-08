
import './App.css';
import {useState} from 'react';

function App() {


  let [newTodo,updateNewTodo] = useState("test");

          let [todoList,updateTodoList] = useState([]);

          function createNewTodo(){
            if(newTodo===""){
              window.alert("Please enter a task");
            }else{
              let newtodoObj = {
                id:todoList.length+1,
                task:newTodo
            }
            updateTodoList([...todoList,newtodoObj]);
            updateNewTodo("")
          }
        }

        function deleteTodo(id){{
          let newToDoList = todoList.filter((todo)=>{
            return todo.id!==id;
          })
          updateTodoList(newToDoList);
          updateNewTodo("");
        }
      }

  return (

    <div className="container mt-5 w-50">
      <h3 className="text-center">TODO APP USING REACT</h3>
      <div className="input-group"> 
           <input  className="form-control"  type="text" value={newTodo} onChange={(e) => updateNewTodo(e.target.value)}/>
           <button className="btn btn-primary" onClick={()=>{
            createNewTodo()
           }} >Add</button>
      </div>
      <ul className="list-group">
        {
          todoList.map((todo)=>{
            return(
                       <li className="list-group-item">
                         <span>{todo.task}</span>
                         <button className="btn" onClick={()=>{
                              deleteTodo(todo.id)
                         }}>❌</button>
                       </li>
            )  
          }
        )
        }
      </ul>
    </div>
  );
}

export default App;
