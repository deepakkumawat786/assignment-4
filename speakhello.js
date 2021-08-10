//step 2: wrap the entire content of Speakhello.js inside of an life
//see lecture 52, part 2


//step 3: create an object, called 'helloSpeaker' to which you will attach
//the "speak" method and which you will expose to the global context
//see lecture 52, part 1
(function () {
    var helloSpeaker = {};


 //do not attach 'speakword' variable to 'helloSpeaker' object
    var speakWord = "Hello";
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
    }

//step 4: rewrite the 'speak' function such that it is attached to the
//'helloSpeaker' on global scope as well
//see lecture 52, part 2

window.helloSpeaker = hellospeaker;
})();

//step 5:expose the 'helloSpeaker' object to the global scope. Name it
//'helloSpeaker' on global scope as well.
//see lecture 52, part 2
//note: step 6 will be done in the SpeakGoodbye.js file.
//xxxx.xxxx = helloSpeaker;