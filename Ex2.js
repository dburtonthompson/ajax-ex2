
const testNum = function(number) {
  return new Promise(function(resolve, reject) {
    if (number > 50) {
      resolve(number + ' is greater than 50');
    } else {
      reject(number + ' is less than 50');
    }
  });
};

testNum(8)
  .then(function(result) console.log(result))
  .catch(function(error) console.log(error));

testNum(50)
  .then(function(result) console.log(result))
  .catch(function(result) console.log(error));