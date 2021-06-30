import Axios from 'axios';
const API = 'http://localhost:3000';
export const createList = (listData) => {
  const options = {
    url: `${API}/api/todos`,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    data: {
      title: 'TodoApp',
      description: `${listData}`,
    },
  };

  return Axios(options)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
