// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

function greet(name, owner) {
  // Add code here
  let result;
  if (name !== "" && owner !== "") {
    if (name === owner) {
      result = "Hello boos";
    } else {
      result = "Hello guest";
    }
  } else {
    result = "pleas give a valide name and owner ";
  }
  return result;
}

// test the function greet difrent cases 
const testGreat = () => {

    // owner test name === owner
  console.log("test case 1 : ");
  const name1 = "mohamed";
  const owner1 = "mohamed";

  const expected1 = "Hello boos";
  const result1 = greet(name1, owner1);

  console.log("Expected output:", expected1);
  console.log("Actual output:", result1);
  console.log("Test passed:", expected1 === result1);
  console.log("\n---------------------------\n");

    // guest test name !== owner
  console.log("test case 2 : ");
  const name2 = "mohamed";
  const owner2 = "oukhlidja";

  const expected2 = "Hello guest";
  const result2 = greet(name2, owner2);

  console.log("Expected output:", expected2);
  console.log("Actual output:", result2);
  console.log("Test passed:", expected2 === result2);
  console.log("\n---------------------------\n");

    // empty name and owner erorr
    console.log("test case 3 : ");
    const name3 = "";
    const owner3 = "";
  
    const expected3 = "pleas give a valide name and owner ";
    const result3 = greet(name3, owner3);
  
    console.log("Expected output:", expected3);
    console.log("Actual output:", result3);
    console.log("Test passed:", expected3 === result3);
    console.log("\n---------------------------\n");


};
testGreat();
