import React from 'react';

const TaskItem = ({ task, onDelete }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => onDelete(task.id)}>Excluir</button>
        </div>
    );
};

export default TaskItem;