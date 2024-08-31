import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todolist() {

    let [todos, settodos] = useState([{ task: "sample-task", id: uuidv4() }])
    let [newtodo, setnewtodo] = useState("")

    let addnewtask = () => {
        settodos((prevtodos) => {
            return [...prevtodos, { task: newtodo, id: uuidv4() }]
        })
        setnewtodo("")
    }
    let updateinput = (event) => {
        setnewtodo(event.target.value)
    }
    let deltodo = (id) => {
      settodos((prevtodos)=>todos.filter((prevtodos) => prevtodos.id != id));
    }

    return (
        <div>
            <input placeholder="add a task" value={newtodo} onChange={updateinput} /> <br /><br />
            <button onClick={addnewtask}> add</button>
            <br /><br />
            <hr />

            <h4>List of Tasks</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <span>{todo.task}</span> &nbsp;
                            <button onClick={() => deltodo(todo.id)}>delete</button>

                        </li>
                    ))}
            </ul >
        </div>
    )
}