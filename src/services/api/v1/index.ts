import axios from 'axios';

export const apiV1 = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api/v1`,
});
