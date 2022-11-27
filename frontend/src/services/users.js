import axios from 'axios';

const baseUrl = '/api/users';

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.then((response) => response.data);
};

const register = async (credential) => {
  const response = await axios.post(baseUrl, credential);
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, register};