import React from 'react';
import TaskList from './features/tasks/components/TaskList';
import './App.css';
import TaskForm from "./features/tasks/components/TaskForm";

function App() {
    return (
        <div className="App">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;