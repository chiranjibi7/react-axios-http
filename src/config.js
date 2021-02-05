import axios from 'axios';

export const axiosInstance= axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export const API_KEY= "8e09f5e07567b290216d9ea076bd7f13";
export const IMAGE_URL="http://image.tmdb.org/t/p/original";
export const BASE_URL ="https://api.themoviedb.org/3";
