// using build in js functions
function ReversedStrings(str) {
  return str.split("").reverse().join("");
}

console.log(ReversedStrings("mohamed oukhlidja"));

// using loop
function ReversedStrings2(str) {
  let reversed = "";
  for (const c of str) {
    reversed = c + reversed;
  }
  return reversed;
}

console.log(ReversedStrings2("Fullstack dev"));

// using more advanced functions

function ReversedStrings3(str) {
  return Array.from(str).reduce((reversed, c) => c + reversed, "");
}

console.log(ReversedStrings3("call me"));
