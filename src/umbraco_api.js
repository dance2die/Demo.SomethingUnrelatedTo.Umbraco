//umbraco-api.js

export const getAccessToken = (username, password) => {
  return new Promise((resolve, reject) => resolve("token!!"));
};

export const getHomeContent = token => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(rawData => {
    console.log("rawData", rawData);
    return rawData.json();
  });
};
