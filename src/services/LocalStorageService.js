export function getItem(keyName) {
  try {
    return JSON.parse(localStorage.getItem(keyName));
  } catch (error) {
    console.log(error);
    return null;
  }
}

export function setItem(keyName, value) {
  localStorage.setItem(keyName, JSON.stringify(value));
}
