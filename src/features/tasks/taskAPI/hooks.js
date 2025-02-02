import { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./tasksAPI";

export const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const addTask = async (taskData) => {
        const newTask = await createTask(taskData);
        if (newTask) setTasks([...tasks, newTask]);
    };

    const modifyTask = async (taskId, updatedData) => {
        const updatedTask = await updateTask(taskId, updatedData);
        if (updatedTask) {
            setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
        }
    };

    const removeTask = async (taskId) => {
        await deleteTask(taskId);
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return { tasks, addTask, modifyTask, removeTask };
};
