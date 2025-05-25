import axios from "axios";

import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/powerbi';

export const listPowerBI = () => axios.get(REST_API_BASE_URL);

export const createPowerBI = (powerbi) => axios.post(REST_API_BASE_URL, powerbi);

export const getPowerBI = (powerbiId) => axios.get(REST_API_BASE_URL + '/' + powerbiId);

export const updatePowerBI = (powerbiId, powerbi) => axios.put(REST_API_BASE_URL + "/" + powerbiId, powerbi);

export const deletePowerBI = (powerbiId) => axios.delete(REST_API_BASE_URL + "/" + powerbiId);