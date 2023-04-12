export const sum = (...num: number[]) => {
  return num.reduce((total, number) => total + number, 0);
};
