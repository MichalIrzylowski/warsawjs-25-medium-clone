export const getToken = () => window.localStorage.getItem("jwt");
export const setToken = token => window.localStorage.setItem("jwt", token);
