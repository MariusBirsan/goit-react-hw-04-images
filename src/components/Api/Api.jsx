import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '40903961-e07635d5dbea58b7d17abeecb',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const fetchImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}`);
  return data;
};
