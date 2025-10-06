// From a sentence "I love JavaScript arrays so much",  
//   1. Convert it to an array of words.  
     let str="I love JavaScript arrays so much";
     let ans=str.split(" ");
     console.log(ans);
     
//   2. Reverse the order of words. 
let rev= ans.reverse()
 console.log(rev);

//   3. Remove the first word and last word.
  ans.shift();
  ans.pop();
 console.log(ans);
 

