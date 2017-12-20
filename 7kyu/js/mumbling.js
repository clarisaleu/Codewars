// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


function accum(s) {
	var returnStr = s.charAt(0).toUpperCase();
  for(var i = 0; i <s.length; i++){
    for(var j = 1; j < i+1; j++){
    if(j==1){
      var e = s.charAt(i).toUpperCase();
      returnStr+=e; 
    }
    e="";
    var thisOne = s.charAt(i).toLowerCase();
    returnStr+= thisOne;
    }
    if(i!=s.length-1){
    returnStr+= "-";  
    }  
  }
  return returnStr;
}
