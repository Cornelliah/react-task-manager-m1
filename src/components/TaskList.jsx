export default function Tasklist ({ tasks, onToggleTask, onDeleteTask }) {
    
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span onClick={() => onToggleTask(task.id)}>
            {task.text}
          </span>
          <button onClick={() => onDeleteTask(task.id)}>Supprimer</button>
        </li>
      ))}
    </ul>
  );
  
}