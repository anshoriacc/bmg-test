const iterationFunction = (n) => {
  let store = '';
  if (typeof n !== 'number') return console.log('input must be number');
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) store += `Frontend`;
    if (i % 5 == 0) store += `Backend`;
    if (i % 3 !== 0 && i % 5 !== 0) store += `${i}`;
    if (i !== n) store += ',';
  }
  console.log(store);
};

iterationFunction(50);
