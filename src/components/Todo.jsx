import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { TodoContext } from "../context/Context";
import axios from "axios";

function Todo() {

    const { todos, setTodos } = useContext(TodoContext);
    const [todo, setTodo] = useState("");

    async function markAsDone(todoId) {
        try {
            const res = await axios.delete("https://6902de75b208b24affe77c48.mockapi.io/api/todos/" + todoId);
            if (res.status === 200) {
                const tempTodos = todos.filter((todo) => {
                    return todo.id != todoId;
                })
                setTodos(tempTodos);
            }
        } catch (error) {
            alert("something went wrong!")
        }
    }

    async function createTodo() {
        const tempTodo = {
            id: Date.now(),
            task: todo
        }
        try {
            const res = await axios.post("https://6902de75b208b24affe77c48.mockapi.io/api/todos", tempTodo)
            if(res.status>=200) {
                setTodos([...todos, tempTodo])
            }
        } catch(error) {
            alert("something went wrong!");
        }

    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Todo List</h2>
            <div className="d-flex justify-content-center mt-5">
                <Form.Control
                    placeholder="Task"
                    className="me-2"
                    required={true}
                    onChange={(event) => {
                        setTodo(event.target.value);
                    }}
                />
                <Button variant="primary" onClick={() => {
                    createTodo();
                }}>Create Todo</Button>
            </div>
            <div className="d-flex justify-content-center mt-5 flex-wrap">
                {
                    todos.map((todo) => {
                        return (
                            <Card key={todo.id} style={{ width: '18rem', margin: '5px' }}>
                                <Card.Body>
                                    <Card.Title>{todo.task}</Card.Title>
                                    <Button onClick={() => {
                                        markAsDone(todo.id)
                                    }} variant="warning">Mark As Done</Button>
                                </Card.Body>
                            </Card>
                        );
                    })
                }
            </div>
        </>
    )
}

export default Todo