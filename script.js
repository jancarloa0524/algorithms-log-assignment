/***********************************************************************************************************
GOOGLE SHEET LOG:

************************************************************************************************************/





// https://github.com/jancarloa0524/algorithms-log-assignment/blob/main/scripts/duplicates.html
// INPUT: A string of characters
// ALG:
  //  1. Declares variables and splits the string into an array of characters
  //  2. The duplicates are plucked and put into a new array 
  //  3. New array has all the duplicates of duplicates removed and put into a final set of characters, since the previous process does not do this. 
// OUTPUT: The number of duplicate characters in a string
function duplicateCount(text){
    // Declare variables, most are set empty since they will be used later
    text = text.toLowerCase(); // In case there are upper/lowercase letters, this will include them
    var charArr = []; // Array holds all characters
    var dupArr = [];// Array holds all duplicate characters
    var charID = ''; // Used to identify the current character being tested
    charArr = text.split("");
    // The following creates TWO for loops
    // The FIRST selects a character in charArr
    // The SECOND takes that character, checks the rest of the code AFTER selected character, for duplicates.
    // When a duplicate is found, it adds selected character to an array of duplicates.
    for (var select = 0; select < charArr.length; select++){
      for (var test = select + 1; test < charArr.length; test++) {
        if (charArr[select] == charArr[test]) {
          dupArr.push(charArr[select]); // Add selected character to dupArr
          test = charArr.length - 1; // Ends the loop here, since a duplicate was found; moves on to next character
        }
      }
    }
    let finalSet = [...new Set(dupArr)]; // This removes duplicates of duplicates, created by the second for loop
    return finalSet.length;
  }
  
  // console.log(duplicateCount("abcdeaabb"));
  // 2, length 9
  //  console.log(duplicateCount("abcdeaabbcccccddd"));
  // 4
  // console.log(duplicateCount("aabBcde"));
  // 2, should ignore case
  // console.log(duplicateCount("abbbbbbccccccdeaabbcccccddd"));
  // 4
  // console.log(duplicateCount("Indivisibilities"));
  // 2