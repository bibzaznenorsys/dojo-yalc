const math = require('mathjs');

function calculerExpression(expression) {
  console.log('I have updated this package ')
  const result = math.evaluate(expression);
  return result;
}

module.exports = { calculerExpression };
