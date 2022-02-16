const fizzBuzz = (length) => {
  // on va créer un tableau qui ocndiendra les nombres ou les fizz ou les buzz
  const numbers = [];

  for (let i = 1; i <= length; i += 1) {
    if (i % 15 === 0) {
      numbers.push('FizzBuzz');
    }
    else if (i % 3 === 0) {
      numbers.push('Fizz');
    }
    else if (i % 5 === 0) {
      numbers.push('Buzz');
    }
    else {
      numbers.push(i);
    }
  }

  // on renvoie les "nombres" (ou les fizz/buzz) séparés par des virgules
  return numbers.join(', ');
};

export default fizzBuzz;
