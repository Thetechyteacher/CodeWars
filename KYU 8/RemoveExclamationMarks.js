//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const newString= s.replaceAll("!","")
  return newString
}