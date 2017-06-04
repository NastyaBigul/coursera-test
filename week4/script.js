// *******************************
// The final output on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

(function (window){
	var names = ["Yaakov", "John", "jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i=0; i<names.length; i++) {
		var firstLetter = names[i].charAt(0);
		firstLetter = firstLetter.toLowerCase();
		if ( firstLetter == "j") {
			byeSpeaker.speak(names[i]);
		} else {
				helloSpeaker.speak(names[i]);
			}
	}
}) (window);
