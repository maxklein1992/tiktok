/*
Capitalize the first letter of a string
*/

export const capitalizeFirstLetter = (string) => {
  string = string.trim();
  return string.trim().charAt(0).toUpperCase() + string.slice(1);
};
