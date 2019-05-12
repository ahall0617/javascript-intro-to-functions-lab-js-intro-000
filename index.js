var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedCase = 'I love you, Grandma'
mixedCase.loLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(uppercase)
}
function logWhisper(string) {
  console.log(lowercase)
}
function sayHiToGrandma(string) {
  if (string.toLowerCase === string) {
    return "I can't hear you!"
  }  
  if (string.toUpperCase === string) {
    return "YES INDEED!"
  } 
  if (string.mixedCase === string) {
    return "I love you, too."
  }
}
