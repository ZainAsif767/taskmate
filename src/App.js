import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [updateTask, setUpdateTask] = useState({});

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


