import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Ajouter une tâche..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
