//Description:
//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//Examples
//replace("Hi!") === "H!!"
//replace("!Hi! Hi!") === "!H!! H!!"
//replace("aeiou") === "!!!!!"
//replace("ABCDE") === "!BCD!"

function replace(s){
	var res = "";
	for(var i  = 0; i< s.length; i++){
		var check = s.charAt(i);
		if(check=="a"||check=="e"||check=="i"||check=="o"||check=="u"||check=="A"||check=="E"||check=="I"||check=="O"||check=="U"){
			check = "!";
		}
		res+=check;
	}
	return res;
}
