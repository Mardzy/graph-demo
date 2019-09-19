import axios from "axios";

export const starWars = axios.create({
  baseURL: "https://swapi.co/api"
});