import React from "react";
import { nanoid } from "nanoid"

export default function AddTask({ taskList, setTaskList }) {

    function handleSubmit(event) {
        event.preventDefault()

        const date = new Date();
        const newTask = {
            id: nanoid(),
            name: event.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTaskList([...taskList, newTask])
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" autoComplete="off" placeholder="add task" maxLength="25"></input>
                <button type="submit">Add</button>
            </form>
        </section>
    )
}