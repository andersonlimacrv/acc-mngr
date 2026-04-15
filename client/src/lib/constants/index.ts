const MODE = import.meta.env.MODE;
const backendUrl = import.meta.env.VITE_DEPLOY_API;
const brokerAPI = import.meta.env.VITE_BROKER_API_URL;
const brokerAPIKey = import.meta.env.VITE_BROKER_API_K;
const port = Number(import.meta.env.VITE_BACKEND_PORT) || 3000;

export const API_URL = MODE === "production" ? backendUrl : `http://localhost:${port}`;
export const BROKER_API_URL = brokerAPI;
export const BROKER_API_KEY = brokerAPIKey;