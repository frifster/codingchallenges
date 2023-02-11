import { sortNumbers } from "@helpers/sortNumbers";

export function sortArray(array: number[]) {
  const filtered = array.filter((a) => a % 2).sort(sortNumbers);

  let currentFilterIndex = 0;

  return array.reduce((arr: number[], currentValue, index) => {
    let newArr = [...arr];

    if (currentValue % 2 !== 0) {
      newArr[index] = filtered[currentFilterIndex];
      currentFilterIndex++;
    } else {
      newArr[index] = currentValue;
    }

    return newArr;
  }, []);
}
