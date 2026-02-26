import { useState } from 'react';
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Gestionnaire de Tâches</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;