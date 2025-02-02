import axios from "axios";

const API_URL = "http://localhost:3001/projects"; // URL da API

// 🔹 Buscar todas as tasks
export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    } catch (error) {
        console.error("Erro ao buscar tasks:", error);
        return [];
    }
};

// 🔹 Criar uma nova task
export const createTask = async (taskData) => {
    try {
        const response = await axios.post(API_URL, taskData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar task:", error);
    }
};

// 🔹 Atualizar uma task (ex: marcar como concluída)
export const updateTask = async (taskId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${taskId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar task:", error);
    }
};

// 🔹 Deletar uma task
export const deleteTask = async (taskId) => {
    try {
        await axios.delete(`${API_URL}/${taskId}`);
    } catch (error) {
        console.error("Erro ao deletar task:", error);
    }
};
