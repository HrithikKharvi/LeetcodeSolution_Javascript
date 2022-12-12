//Problem name :- Length of Longest Substring
//Approach:- Two pointer method
//Language:- Javascript
//author :- Hrithik R
var lengthOfLongestSubstring = function(s) {
	   
   let pointer1 = 0;
  let pointer2 = 0;
  let maxCount = 0;

  let map = {};

  while(pointer2 < s.length){
    let currentString = s[pointer2];
    let seenIndex = map[currentString];
    if(seenIndex == undefined){
      map[currentString] = pointer2;
      pointer2++;
    }else{
      if(seenIndex >= pointer1){
        pointer1 = seenIndex+1;
      }
        map[currentString] = pointer2;

      pointer2++;
    }

        let currentCount = (pointer2 - 1) - pointer1 +1;
        maxCount = Math.max(currentCount, maxCount);
  }

  return maxCount;
};