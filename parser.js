const rust = require('./neon/native');

const SECONDS_IN_MS = 1e+9;
const MS_IN_NANOSECONDS = 1e+6;

function performTest (testFunction, value) {
  const tryCount = 10;
  const total = new Array(tryCount)
    .fill()
    .map(() => {
      const start = process.hrtime();
      testFunction(value);
      const end = process.hrtime(start);
      return (end[0] * SECONDS_IN_MS + end[1]) / MS_IN_NANOSECONDS;
    })
    .reduce((sum, current) => {
      return sum + current
    });

  return total;
}

const removeWhitespace = (str) => {
  return str.replace(/\s/g, " ");
};

const parseString = '           pB WLRu\t qpBWLRu\t qZ     oCExn   lFV  iX0M   c j  gL@_  at      zNI&nb\t J IA    ';

const nativeResult = removeWhitespace(parseString);
const neonResult = rust.remove_whitespaces(parseString);

const nativeAvgDuration = performTest(removeWhitespace, parseString);
const neonAvgDuration = performTest(rust.remove_whitespaces, parseString);

console.log('js function :', Math.round(nativeAvgDuration * 10000) / 10000, 'ms');
console.log('Rust Library:', Math.round(neonAvgDuration * 10000) / 10000, 'ms');


