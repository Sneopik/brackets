module.exports = function check(str, bracketsConfig) {
  
  let stack = [];

  if (str.length % 2 != 0) 
    return false;

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] == '|')
        bracketsConfig[j][0] == '<'
      if (bracketsConfig[j][1] == '|')
        bracketsConfig[j][1] == '>';
    }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][0])
        stack.push(str[i]);
        
      let last = stack[stack.length - 1];

      if (str[i] == bracketsConfig[j][1] && last == bracketsConfig[j][0]) {
        stack.pop();
      }
        
    }
  }

  if (stack.length == 0)
    return true;
  else 
    return false;

}
