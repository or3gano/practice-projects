alert( "Stop. Who would cross the Bridge of Death must answer me these questions three, ere the other side he see." );

alert( "You reply: Ask me the questions, bridgekeeper. I am not afraid.");

var user = prompt( "What is your name?", "Choose from: Lancelot, Robin, Galahad, or Arthur." ).toLowerCase();

switch ( user ) {

    case 'lancelot' :
        alert ( "You reply: My name is Sir Lancelot of Camelot." );
		var responseOne = prompt( "What... is your quest?" ).toLowerCase();
		alert ( "You reply: " + responseOne );
        if ((responseOne === "to seek the holy grail") || (responseOne === "the holy grail")) {
            var responseTwo = prompt("What... is your favourite colour?").toLowerCase();
			if ( responseTwo === "blue" ) {
				alert ( "You reply: Blue" );
				alert ( "Go on. Off you go." );
				alert ( "Congratulations! You made it accross the Bridge of Death alive!!!" );
			}
			else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        }
        else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        break;
		
    case 'robin' :
        alert ( "You reply: Sir Robin of Camelot." ) ;
		var responseOne = prompt( "What... is your quest?" ).toLowerCase();
		alert ( "You reply: " + responseOne );
        if ((responseOne === "to seek the holy grail") || (responseOne === "the holy grail")) {
            var responseTwo = prompt("What... is the capital of Assyria?").toLowerCase();
			if ( responseTwo === "I don't know that" ) {
				alert ( "You reply: I don't know that!" );
				alert ( "Yay! You played the game correctly! But you get tossed into the Pit of Eternal Peril anyway . . . Thanks for Playing!" );
			}
			else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        }
        else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        break;
		
    case 'galahad' :
        alert ( "You reply: Sir Galahad of Camelot." ) ;
		var responseOne = prompt( "What... is your quest?" ).toLowerCase();
		alert ( "You reply: " + responseOne );
        if ((responseOne === "to seek the holy grail") || (responseOne === "i seek the grail")) {
            var responseTwo = prompt("What... is your favourite colour?").toLowerCase();
			if ( (responseTwo === "blue. no, yellow") || (responseTwo === "blue no yellow") ) {
				alert ( "You reply: Blue. No, yellooooooooooo . . . " );
				alert ( "Yay! You played the game correctly! But you get tossed into the Pit of Eternal Peril anyway . . . Thanks for Playing!" );
			}
			else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        }
        else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        break;
		
    case 'arthur' :
        alert ( "You reply: It is 'Arthur', King of the Britons." ) ;
		var responseOne = prompt( "What... is your quest?" ).toLowerCase();
		alert ( "You reply: " + responseOne );
        if ((responseOne === "to seek the holy grail") || (responseOne === "the holy grail")) {
            var responseTwo = prompt("WWhat... is the air-speed velocity of an unladen swallow?").toLowerCase();
			if ( (responseTwo === "what do you mean? an african or european swallow?") || (responseTwo === "what do you mean african or european swallow") ) {
				alert ( "You reply: What do you mean? An African or European swallow?" );
				alert ( "Huh? I... I don't know that!" );
				alert ( "Aaaaaaaahhhhhhh!!!! The Bridgekeeper is thrown into the Pit of Eternal Peril!" );
				var question = prompt("How do know so much about swallows?").toLowerCase();
				if ( (question === "well, you have to know these things when you're a king, you know") || (question === "you have to know these things when you're a king you know") ) {
					alert ( "You reply: Well, you have to know these things when you're a king, you know." );
					alert ( "Congratulations! You made it accross the Bridge of Death alive!!!" );
				}
				else {
					alert("You made it so far! I can't beleive you didn't get that one!");
					alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");
				}
			}
			else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        }
        else { alert("You have answered incorrectly. You get tossed into the Pit of Eternal Peril!!!");}
        break;
		
    default:
        alert ( "You reply: " + user )
		alert ( "You obviously don't know how to read intstructions. Refresh the page to try again." );
        break;
}