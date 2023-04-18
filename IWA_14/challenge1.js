const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = () => {
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
  console.log(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

const wholeSentence = () => {
  logTwice()
}

wholeSentence()