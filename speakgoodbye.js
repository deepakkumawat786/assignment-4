// note! the steps in this file are basically identical to the ones you
// performed in the speakHello.js file.

// step 6: wrap the entire content of SpeakGoodBye.js inside of an
// see lecture 52, part 1

// step 7: create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to global content 
// see lecture 52, part 1

(function(){
    var byeSpeaker = {};

// do not attach the speakword variable to the 'byeSpeaker' object.
var speakWord = "Good Bye";
byeSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
}

//step 8: rewrite the 'speak' function such that it is attached to the
//byeSpeaker object instead of being a standalone function.
//see lecture 52, part 2
window.byeSpeaker = byeSpeaker;

})();
//step 9: expose the 'byeSpeake' object to the global scope. Name it
//'byeSpeaker' on global scope as well.
//xxxx.xxxx = byeSpeaker;