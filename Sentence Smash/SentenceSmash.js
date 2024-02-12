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

  console.log("test case 1 : ");
  const words2 = [];
  const expected2 = "";
  const result2 = smash(words2);
  console.log("Expected output:", expected2);
  console.log("Actual output:", result2);
  console.log("Test passed:", expected2 === result2);
  console.log("\n---------------------------\n");
}

// run the test function
testSmashFun();
