import { useState } from "react";
import Todocontext from "./TodoContext";
import { useEffect } from "react"

const TodoProvider = (props) => {
    
    const [Todos,setTodo] = useState(()=>{
        const reloadtodos = localStorage.getItem("todos");
        return reloadtodos ? JSON.parse(reloadtodos) : [];
    })
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(Todos));
    },[Todos])
    return(
        <Todocontext.Provider value = {{Todos,setTodo}}>
        {props.children}
        </Todocontext.Provider>
    )
    
}
export default TodoProvider