import { useEffect, useState } from "react";
import { TodoContext } from "./Context";
import axios from "axios";

export default function TodoProvider({ children }) {

    const [todos, setTodos] = useState([]);

    async function getTodos() {
        try {
            const res = await axios.get("https://6902de75b208b24affe77c48.mockapi.io/api/todos");
            setTodos(res.data);
        } catch(error) {
            alert("something went wrong!");
        }
    }

    useEffect(() => {
        getTodos();
    }, []);


    return (
        <TodoContext.Provider value={ {todos, setTodos} }>
            {children}
        </TodoContext.Provider>
    )

}