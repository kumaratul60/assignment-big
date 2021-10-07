// the purpose of this function to shuffle an array
// the application of this functon is to take an array of player objects and shuffle them into a random order
// this function is based on the Fisher-Yates shuffle algorithm

export const shuffle = (array) => {
  let index = array.length;
  let temp, random;

  while (index !== 0) {
    random = Math.floor(Math.random() * index);
    index -= 1;

    temp = array[index];
    array[index] = array[random];
    array[random] = temp;
  }

  return array;
};
