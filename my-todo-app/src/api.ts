import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001",
})

export const fetch = async () => {
    const response = await api.get("/todos");
    return response.data;
}

export const add = async (todo: {id: number; action: string; complete: boolean}) => {
    const response = await api.post("/todos", todo);
    return response.data;
}

export const deleteTodo = async (id: number) => {
    const response = await api.delete('/todos/' + id);
    return response.data;
}

export default api;