import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const buscar = async (
  url: string,
  setDados: Function,
  header: Object
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};
export const login = async (url: string, dados: Object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
