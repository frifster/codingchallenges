export const sortNumbers = (currentNumber: number, nextNumber: number) => {
  if (currentNumber > nextNumber) {
    return 1;
  }

  return -1;
};
