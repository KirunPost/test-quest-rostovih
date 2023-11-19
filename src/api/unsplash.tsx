// копоненит для подключения к внешнему api через axios
// ограничение 50 фотографий в час 
import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID nexOvP2bdV2D17s3RLYy4D318TBj5SpJm0koLTj7fi4', 
  },
});

export default unsplash;