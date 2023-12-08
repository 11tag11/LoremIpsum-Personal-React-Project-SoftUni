import * as request from '../library/request';

const baseUrl = "http://localhost:3030/users"; 


export const loginUser = (loginData) => request.post(`${baseUrl}/login`, loginData);
// console.log(userData);
export const createUser = (registerData) => request.post(`${baseUrl}/register`, registerData);
export const logout = async () => {
    
  request.get(`${baseUrl}/logout`);

  localStorage.removeItem('user');
};
