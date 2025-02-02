import React from "react";
import TaskForm from "./features/tasks/components/TaskForm";
import TaskList from "./features/tasks/components/TaskList";
import "./index.css"
function App() {
    return (
        <div className="max-w-lg mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-6">Gerenciador de Tarefas</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
