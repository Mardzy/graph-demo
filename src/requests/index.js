import { starWars } from "../api";

export const fetchPeople = () => starWars.get("/people", {} );

export const fetchSpecies = () => starWars.get("/species", {} );