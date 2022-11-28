import axios from "axios";
const baseUrl = 'http://localhost:5000/api/posts';

let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const getAll = async () => {
    const request = axios.get(baseUrl);
    const response = await request;
  return response.data;
}

const getPostById = async (id) => {
  const elementUrl = `/api/posts/${id}`;
  const request = axios.get(elementUrl);
  const response = await request;
  return response.data;
}

const create = async newObject => {
    const config = {
        headers: {Authorization: token},
    }
    const request = axios.post(baseUrl, newObject, config);
    return request.then(response => response.data);
}

const remove = async id => {
    const elementUrl = `/api/posts/${id}`;
    try {
    return await axios.delete(elementUrl);
  } catch (error) {
    console.error('There was an error!', error);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, getPostById, create, remove, setToken}