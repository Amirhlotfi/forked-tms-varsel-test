const fetchString = (url: string) => {
  fetch(url, {})
    .then((response) => response.text())
    .then((data) => data);
};

export const generateUUID = () => {
  return fetchString("http://localhost:4321/mock/uuid");
};

