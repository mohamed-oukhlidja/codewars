function smash(words) {
  return words.join(" ");
}

//test the code
function testSmashFun(params) {
  console.log("test case 1 : ");
  const words1 = ["Hello", "World"];
  const expected1 = "Hello World";
  const result1 = smash(words1);
  console.log("Expected output:", expected1);
  console.log("Actual output:", result1);
  console.log("Test passed:", expected1 === result1);
  console.log("\n---------------------------\n");
}

// run the test function
testSmashFun();
