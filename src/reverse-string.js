module.exports = (string) => {
  let result = '';
  for(let i = string.length -1; i >= 0; i--){
    result = result + string.charAt(i);
  }
  return result;
};

// module.exports = (string) => {
//    let array = string.split('')
//                      .reverse()
//                      .join('');
//    return array;
// };
