import { authAxios, todosAxios } from './axios-setting';

export const postSignin = async (userData) => {
  return authAxios
    .post('/auth/signin', userData)
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const postSignup = async (userData) => {
  return authAxios
    .post('/auth/signup', userData)
    .then((response) => {
      return response.data.access_token;
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const requestTodos = async (method, propsData = {}) => {
  const { id = '', ...userData } = propsData;
  const config = {
    method: method,
    url: `/todos/${id}`,
    data: userData,
  };
  return await todosAxios(config).then((res) => res.data);
};

export const getTodos = async () => {
  return await requestTodos('GET')
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error.message);
    });
};
export const postTodos = async (userData) => {
  return await requestTodos('POST', userData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error.message);
    });
};
export const putTodos = async (userData) => {
  return requestTodos('PUT', userData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error.message);
    });
};
export const deleteTodos = async (id) => {
  return requestTodos('DELETE', { id })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error.message);
    });
};
