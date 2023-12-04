export const formatDate = (date) => {
  const newDate = new Date(date);

  if (isNaN(newDate.getTime())) {
    return "Invalid Date";
  }

  const formattedDate = `${newDate.getDate()}.${
    newDate.getMonth() + 1
  } ${newDate.getHours()}:${newDate.getMinutes()}`;

  return formattedDate;
};
