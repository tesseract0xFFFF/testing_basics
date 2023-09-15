function capitalize(str){
  return str[0].toUpperCase() + str.slice(1);
}

function reverse(str){
  const newStr = [];
  for(let i = (str.length - 1); i >= 0; i--){
    newStr.push(str[i]);
  }
  return newStr.join('');
}

function ceaser(str, key){
  const toLowerCase = str.toLowerCase();
  const characterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const encryptedMsg = [];
  for(let i = 0; i<str.length; i++){
    if(str[i] === ',' || str[i] === ' '|| str[i] === '.'){
      encryptedMsg.push(str[i]);
      continue;
    }
    const newCharIndex = characterArr.indexOf(toLowerCase[i]) + key;
    const newCharIndexMod26 = (newCharIndex % 26);
    const newCharacter = characterArr[newCharIndexMod26];
    encryptedMsg.push(newCharacter);
  }
  return encryptedMsg.join('');
}

const enc1 = ceaser('a', 25);

console.log(enc1);

export {capitalize, reverse, ceaser};


