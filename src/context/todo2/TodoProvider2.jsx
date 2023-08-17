import { useState } from "react";
import Todocontext2 from "./TodoContext2";
import { useEffect } from "react"

const TodoProvider2 = (props) => {
    
    const [Todos2,setTodo2] = useState(()=>{
        const reloadtodos = localStorage.getItem("todos2");
        return reloadtodos ? JSON.parse(reloadtodos) : [];
    })
    useEffect(()=>{
        localStorage.setItem("todos2",JSON.stringify(Todos2));
    },[Todos2])
    return(
        <Todocontext2.Provider value = {{Todos2,setTodo2}}>
        {props.children}
        </Todocontext2.Provider>
    )
    
}
export default TodoProvider2