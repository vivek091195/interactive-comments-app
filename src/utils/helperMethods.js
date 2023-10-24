export const getValueFromLS = (key) => {
  return localStorage.getItem(key);
};

export const setValueInLS = (key, value) => {
  localStorage.setItem(key, value);
};

export const safelyParseJSON = (str) => {
  let result;
  try {
    result = JSON.parse(str);
  } catch (e) {
    result = str;
  }
  return result;
};
