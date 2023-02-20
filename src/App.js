import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [updateTask, setUpdateTask] = useState({});

  React.useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(taskList))
  }, [taskList])

  return (
    <div>
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        updateTask={updateTask}
        setUpdateTask={setUpdateTask}
      />
    </div>
  );
}


