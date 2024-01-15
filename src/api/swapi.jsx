import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}/films`);
  return response.data.results;
};