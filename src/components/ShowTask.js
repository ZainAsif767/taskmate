import React from "react";

export default function ShowTask({ taskList, setTaskList }) {

    function handleClear() {
        setTaskList([])
    }

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
                {taskList && taskList.map((task) => (
                    <li key={task.id}>
                        <p>
                            <span className="name">{task.name}</span>
                            <span className="time">{task.time}</span>
                        </p>
                        <i className="bi bi-pencil-square"></i>
                        <i className="bi bi-trash"></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}