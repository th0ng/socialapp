import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users';

const getAll = async () => {
  const response = await axios.get(baseUrl).then((response) => response.data);
  return response;
};

const register = async (credential) => {
  const response = await axios.post(baseUrl, credential);
  return response.data;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, register };
