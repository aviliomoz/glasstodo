const api_url = 'https://todo-mern-app-avilio.herokuapp.com';

export const simpleFetch = (endpoint, method = 'GET', body = null) => {
  try {
    if (method === 'GET') {
      return fetch(`${api_url}/api${endpoint}`);
    } else {
      return fetch(`${api_url}/api${endpoint}`, {
        method,
        body: JSON.stringify({ task: body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  } catch (error) {
    console.log('Error happened here!');
    console.error(error);
  }
};
