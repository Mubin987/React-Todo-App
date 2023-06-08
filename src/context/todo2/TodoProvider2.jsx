import { useState } from "react";
import Todocontext2 from "./TodoContext2";
const TodoProvider2 = (props) => {
    
    const [Todos2,setTodo2] = useState([])
    return(
        <Todocontext2.Provider value = {{Todos2,setTodo2}}>
        {props.children}
        </Todocontext2.Provider>
    )
    
}
export default TodoProvider2