function getGrade(s1, s2, s3) {
  // Code here
  let grade;
  const average = (s1 + s2 + s3 )/3;
  
  switch (true) {
      case average >= 90:
          grade = 'A';
          break;
      case average >= 80:
          grade = 'B';
          break;
      case average >= 70:
          grade = 'C';
          break;
      case average >= 60:
          grade = 'D';
          break;
      default:
          grade = 'F';
          break;
  }
  return grade;

}


// test the code
function testGetGrade(params) {
  console.log("test case 1 : ");
  const s1 = 95;
  const s2 = 90;
  const s3 = 93;
  const expected1 = "A";
  const result1 = getGrade(s1, s2, s3);
  console.log("Expected output:", expected1);
  console.log("Actual output:", result1);
  console.log("Test passed:", expected1 === result1);
  console.log("\n---------------------------\n");

  console.log("test case 2 : ");
  const s4 = 89;
  const s5 = 80;
  const s6 = 83;
  const expected2 = "B";
  const result2 = getGrade(s4, s5, s6);
  console.log("Expected output:", expected2);
  console.log("Actual output:", result2);
  console.log("Test passed:", expected2 === result2);
  console.log("\n---------------------------\n");

  console.log("test case 3 : ");
  const s7 = 79;
  const s8 = 50;
  const s9 = 33;
  const expected3 = "F";
  const result3 = getGrade(s7, s8, s9);
  console.log("Expected output:", expected3);
  console.log("Actual output:", result3);
  console.log("Test passed:", expected3 === result3);
  console.log("\n---------------------------\n");


}

testGetGrade();
