import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';
import './App.css';
import { useState } from 'react';

export default function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div>
      <Header />
      <AddTask tasklist={taskList} setTaskList={setTaskList} />
      <ShowTask tasklist={taskList} setTaskList={setTaskList} />
    </div>
  );
}


