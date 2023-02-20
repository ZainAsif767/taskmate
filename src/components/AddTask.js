import React, { useState } from "react";

export default function AddTask({ taskList, setTaskList, updateTask, setUpdateTask }) {

    function handleSubmit(e) {
        e.preventDefault();

        if (updateTask.id) {
            const date = new Date()
            const updatedTaskList = taskList.map((todo) => (
                todo.id === updateTask.id ? { id: updateTask.id, name: updateTask.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` }
                    : todo
            ));
            setTaskList(updatedTaskList);
            setUpdateTask({})
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask])
            setUpdateTask({})
        }


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
                    value={updateTask.name || ""}
                    onChange={(e) => setUpdateTask({ ...updateTask, name: e.target.value })}
                />
                <button type="submit">{updateTask.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}