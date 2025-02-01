import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        const data = {
            title,
            description,
            completed: false, // Adicionando um campo completado, caso seja necessário no backend
        };

        try {
            // Envia os dados para o backend
            const response = await axios.post('http://localhost:3000/tasks', data);

            // Verifica a resposta e loga os dados recebidos
            console.log('Tarefa criada:', response.data);

            // Opcional: Se você tiver uma função para atualizar a lista de tarefas, pode chamá-la aqui
            if (onTaskCreated) {
                onTaskCreated(response.data); // Passa os dados da nova tarefa para o componente pai, caso necessário
            }
        } catch (error) {
            // Caso haja erro, ele será logado aqui
            console.error('Erro ao criar tarefa:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Título:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descrição:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Criar Tarefa</button>
        </form>
    );
};

export default TaskForm;
