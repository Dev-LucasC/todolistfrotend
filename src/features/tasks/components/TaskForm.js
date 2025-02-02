import React, { useState } from "react";
import { useTasks } from "../taskAPI/hooks";

const TaskForm = () => {
    const { addTask } = useTasks();
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addTask({ title, completed: false });
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 flex gap-2">
            <input
                type="text"
                placeholder="Nova Tarefa..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded-lg flex-1"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Adicionar
            </button>
        </form>
    );
};

export default TaskForm;
