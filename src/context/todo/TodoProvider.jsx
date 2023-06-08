import { useState } from "react";
import Todocontext from "./TodoContext";

const TodoProvider = (props) => {
    
    const [Todos,setTodo] = useState([])
    return(
        <Todocontext.Provider value = {{Todos,setTodo}}>
        {props.children}
        </Todocontext.Provider>
    )
    
}
export default TodoProvider