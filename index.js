var uppercase = "HELLO!"
uppercase.toUpperCase() === uppercase
var lowercase = 'hello!'
lowercase.toLowerCase() === lowercase
var mixedcase = "I love you, Grandma."
mixedCase.toLowerCase() === mixedCase
mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log("HELLO!" === string)
}
function logWhisper(string) {
  console.log('hello!' === string)
}
function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
  if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }
  if ("I love you, Grandma." === string) {
    return 'I love you, too.'
  }
}
