const array = [];

const escribo = (num) => {
  for (let i = num - 1; i > 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }
  console.log(array);
  const total = array.reduce((acc, value) => acc + value);
  console.log(total);
};
