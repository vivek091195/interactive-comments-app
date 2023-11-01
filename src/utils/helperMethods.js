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

export const getFormattedDateString = (
  createdDate,
  currentDate = new Date()
) => {
  const date =
    new Date(createdDate) == "Invalid Date" ? -1 : new Date(createdDate);
  if (date !== -1) {
    const diffTime = currentDate - date;
    const diffTimeInMins = Math.ceil(diffTime / (1000 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffWeeks = Math.floor(diffDays / 7);
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears > 0) {
      return `${diffYears} ${diffYears > 1 ? "years" : "year"} ago`;
    } else if (diffMonths > 0) {
      return `${diffMonths} ${diffMonths > 1 ? "months" : "month"} ago`;
    } else if (diffWeeks > 0) {
      return `${diffWeeks} ${diffWeeks > 1 ? "weeks" : "week"} ago`;
    } else if (diffDays > 0) {
      return `${diffDays} ${diffDays > 1 ? "days" : "day"} ago`;
    } else {
      return `${diffTimeInMins} ${diffTimeInMins > 1 ? "mins" : "min"} ago`;
    }
  }
};
