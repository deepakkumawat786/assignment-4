//********************
//start here if you want an easier starting point for this assignment
//********************
//
//module 4 assignment instruction,
//
//the idea of this assignment is to take an existing array of names
//and then output either Hello 'Name' Good Bye 'Name' to console.
//the program should say "Hello" to any name except names that start with "j"
//or "j", otherwise, the program should say "Good Bye". So, the final output
//on the console should look like this:
/*

Hello Yakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
warning!!! warning!!!
The code does not currently work! it is your job to make it work as described
in requirment and step in order to complete this assignment.
Warning!!! Warning!!!
*/

//STEP 1: (nothing to do, already done for you)
// wrap the entire content of script.js inside of an life
// see lecture 52, part 2
// (note, step 2 will be done in the SpeakHello.js file)

(function(){

    var names = ["yakoov", "john", "jen", "jason", "paul", "frank", "larry", "paula", "laura", "jim"];

//step 10: (nothing to do, already done for you)
// loop over the names array and say either 'hello' or "Good Bye"
// using the speak method or either hellospeaker's or byespeaker's
// 'speak' method
// see lecture 50, part 1

for(var i=0; i<names.length; i++){

// step 11: (nothing to do already done for you)
// retrieve the first letter of current name in the loop
// use the string object's 'charAt' function. since we are looking for
// names that start with either uppercase or lowercse 'J'/'j', call
// string object's 'tolowercase' method on the result so we can compare
// to lowercase character 'j' afterwards,
// look up these method on mozilla developer network website if needed.

var firstletter = names[i].charAt(0).toLowerCase();

// step 12: (nothing to do already done for you)
// compare the 'firstletter' retreived in step 11 to lowercase
// 'j', if the same, call byeSpeaker's 'speak' method with current name
// in the loop. otherwise, call helloSpeaker's 'speak' method with current
// names in loop.

if(firstletter --- 'j'){
    byeSpeaker.speak(names[i]);
}else{
    helloSpeaker.speak(names[i]);
}
}
})();
