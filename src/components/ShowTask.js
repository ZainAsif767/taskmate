import React from "react";

export default function ShowTask({ taskList, setTaskList, updateTask, setUpdateTask }) {

    function handleClear() {
        setTaskList([])
    }
    const handleEdit = (id) => {
        const selectedTask = taskList.find(todo => todo.id === id)
        setUpdateTask(selectedTask)

    }
    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(todo => todo.id !== id)
        setTaskList(updatedTaskList)

    }


    const taskElements = taskList.map(todo =>
        <li key={todo.id}>
            <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
            </p>
            <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(todo.id)} className="bi bi-trash"></i>
        </li>
    )

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo!</span>
                    <span className="count">{taskList ? taskList.length : 0}</span>
                </div>
                <button className="clearAll" onClick={handleClear}>Clear All</button>
            </div>
            <ul>
                {taskElements}
            </ul>
        </section>
    )
}