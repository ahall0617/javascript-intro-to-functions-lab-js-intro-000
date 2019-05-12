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
  console.log(string === 'hello'.toUpperCase)
}
function logWhisper(string) {
  console.log(string.toLowerCase)
}
function sayHiToGrandma(string) {
  if ("HELLO!") {
    return "YES INDEED!"
  } else if ('hello!') {
    return "I can't hear you!"
  } else {
    return "I love you, too."
  }
}
