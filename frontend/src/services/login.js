const baseUrl = 'http://localhost:5000/api/login';

const login = async (credentials) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: credentials
  });
  return response.json();
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login };
