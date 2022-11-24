const baseUrl = '/api/login';

const login = async (credential) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: credential
  });
  return response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login };