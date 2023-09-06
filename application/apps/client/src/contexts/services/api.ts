// api.ts
import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000', // Coloque a URL correta do seu backend
});


