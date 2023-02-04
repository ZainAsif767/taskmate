import React, { useState } from "react";
// import { nanoid } from "nanoid"

export default function AddTask({ taskList, setTaskList, updateTask, setUpdateTask }) {
    const [newTask, setNewTask] = useState({ id: "", name: "", time: "" });

    function handleSubmit(e) {
        e.preventDefault();

        const date = new Date();
        setNewTask({
            id: date.getTime(),
            name: e.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        });
        if (Array.isArray(taskList)) {
            setTaskList([...taskList, newTask]);
        } else {
            setTaskList([newTask]);
        }
        e.target.task.value = "";
    };

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="add task"
                    maxLength="25"
                    value={newTask.name}
                    onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
                />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}