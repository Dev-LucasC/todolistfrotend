import React from "react";
import { useTasks } from "../taskAPI/hooks";

const TaskList = () => {
    const { tasks, modifyTask, removeTask } = useTasks();

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Lista de Tarefas</h2>
            <div className="space-y-6">
                {tasks.map((project) => (
                    <div key={project.id} className="border-b pb-4">
                        {/* Exibir o nome do projeto */}
                        <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>

                        {/* Iterar sobre os grupos dentro do projeto */}
                        {project.groups.map((group) => (
                            <div key={group.id} className="space-y-4">
                                {/* Exibir o nome do grupo */}
                                <h4 className="text-xl font-semibold">{group.name}</h4>

                                {/* Iterar sobre as tarefas dentro do grupo */}
                                <ul className="space-y-2">
                                    {group.tasks.map((task) => (
                                        <li
                                            key={task.id}
                                            className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                                        >
                                            {/* Exibir título da tarefa */}
                                            <span
                                                className={
                                                    task.completed
                                                        ? "line-through text-gray-500"
                                                        : "text-gray-800"
                                                }
                                            >
                                                {task.title}
                                            </span>

                                            {/* Botões de modificar e excluir */}
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        modifyTask(task.id, {
                                                            completed: !task.completed,
                                                        })
                                                    }
                                                    className="bg-green-500 text-white px-3 py-1 rounded-lg mx-1"
                                                >
                                                    {task.completed ? "Reabrir" : "Concluir"}
                                                </button>
                                                <button
                                                    onClick={() => removeTask(task.id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                                                >
                                                    Excluir
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
