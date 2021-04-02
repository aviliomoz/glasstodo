const api_url = 'https://todo-mern-app-avilio.herokuapp.com';

export const simpleFetch = (endpoint, method = 'GET', body = null) => {
  try {
    if (method === 'GET') {
      return fetch(`${api_url}/api${endpoint}`);
    } else {
      return fetch(`${api_url}/api${endpoint}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchWithToken = (endpoint, method = 'GET', body = null) => {
  const token = localStorage.getItem('jwt') || '';

  try {
    if (method === 'GET') {
      return fetch(`${api_url}/api${endpoint}`, {
        method,
        headers: {
          'x-token': token,
        },
      });
    } else {
      return fetch(`${api_url}/api${endpoint}`, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
          'x-token': token,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
