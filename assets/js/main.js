	
	$(document).ready(function(){

		$('.alert.alert-success').hide();
		$('.alert.alert-danger').hide();
		showRandom();

	});

	var hiragana = 
	["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", 
	"さ" , "し", "す",	 "せ", "そ", "た", "ち", "つ", "て", "と",
	"な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", 
	"ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り",
	"る", "れ", "ろ", "わ", "を", "ん"];

	var japaneseLetter = document.getElementById("japanese-letter");
		

	function showRandom(){
		var letter= hiragana[Math.floor(Math.random() * hiragana.length)];
		japaneseLetter.innerHTML = letter;
	}

	function showMessage(){
		$('.alert.alert-success').fadeIn('slow');;

	}

	function hideMessage(){
		$('.alert.alert-success').hide();
	}

	function showError(){
		$('.alert.alert-danger').fadeIn('slow');;

	}

	function hideError(){
		$('.alert.alert-danger').hide();
	}



		
	function validateLetter(){
		var letterToCheck = document.getElementById("letter-to-validate").value;
		letterToCheck = letterToCheck.toLowerCase();

		switch (letterToCheck)
		{
		    case "a":
		    	letterToCheck=hiragana[0];
		    	break;
		    case "i":
		    	letterToCheck=hiragana[1];
		    	break;
		    case "u":
		    	letterToCheck=hiragana[2];
		    	break;
		    case "e":
		    	letterToCheck=hiragana[3];
		    	break;
		    case "o":
		    	letterToCheck=hiragana[4];
		    	break;
		    case "ka":
		    	letterToCheck=hiragana[5];
		    	break;
		    case "ki":
		    	letterToCheck=hiragana[6];
		    	break;
		    case "ku":
		    	letterToCheck=hiragana[7];
		    	break;
		    case "ke":
		    	letterToCheck=hiragana[8];
		    	break;
		    case "ko":
		    	letterToCheck=hiragana[9];
		    	break;
		    case "sa":
		    	letterToCheck=hiragana[10];
		    	break;
		    case "si":
		    	letterToCheck=hiragana[11];
		    	break;
		    case "su":
		    	letterToCheck=hiragana[12];
		    	break;
		    case "se":
		    	letterToCheck=hiragana[13];
		    	break;
		    case "so":
		    	letterToCheck=hiragana[14];
		    	break;
		    case "ta":
		    	letterToCheck=hiragana[15];
		    	break;
		    case "ti":
		    	letterToCheck=hiragana[16];
		    	break;
		    case "tu":
		    	letterToCheck=hiragana[17];
		    	break;
		    case "te":
		    	letterToCheck=hiragana[18];
		    	break;
		    case "to":
		    	letterToCheck=hiragana[19];
		    	break;
		    case "na":
		    	letterToCheck=hiragana[20];
		    	break;
		    case "ni":
		    	letterToCheck=hiragana[21];
		    	break;
		    case "nu":
		    	letterToCheck=hiragana[22];
		    	break;
		    case "ne":
		    	letterToCheck=hiragana[23];
		    	break;
		    case "no":
		    	letterToCheck=hiragana[24];
		    	break;
		    case "ha":
		    	letterToCheck=hiragana[25];
		    	break;
		    case "hi":
		    	letterToCheck=hiragana[26];
		    	break;
		    case "hu":
		    	letterToCheck=hiragana[27];
		    	break;
		    case "he":
		    	letterToCheck=hiragana[28];
		    	break;
		    case "ho":
		    	letterToCheck=hiragana[29];
		    	break;
		    case "ma":
		    	letterToCheck=hiragana[30];
		    	break;
		    case "mi":
		    	letterToCheck=hiragana[31];
		    	break;
		    case "mu":
		    	letterToCheck=hiragana[32];
		    	break;
		    case "me":
		    	letterToCheck=hiragana[33];
		    	break;
		    case "mo":
		    	letterToCheck=hiragana[34];
		    	break;
		    case "ya":
		    	letterToCheck=hiragana[35];
		    	break;
		    case "yu":
		    	letterToCheck=hiragana[36];
		    	break;
		    case "yo":
		    	letterToCheck=hiragana[37];
		    	break;
		    case "ra":
		    	letterToCheck=hiragana[38];
		    	break;
		    case "ri":
		    	letterToCheck=hiragana[39];
		    	break;
		    case "ru":
		    	letterToCheck=hiragana[40];
		    	break;
		    case "re":
		    	letterToCheck=hiragana[41];
		    	break;
		    case "ro":
		    	letterToCheck=hiragana[42];
		    	break;
		    case "wa":
		    	letterToCheck=hiragana[43];
		    	break;
		    case "wi":
		    	letterToCheck=hiragana[44];
		    	break;
		    case "we":
		    	letterToCheck=hiragana[45];
		    	break;
		    case "wo":
		    	letterToCheck=hiragana[46];
		    	break;
		    case "na":
		    	letterToCheck=hiragana[47];
		    	break;
		    default: 
		    	console.log("no esta agregado aún!!")

		}

		if(japaneseLetter.innerHTML==letterToCheck){
			hideError();
			showRandom();
			showMessage();
			//setTimeout(hideMessage, 1000);
			
		}
		else {
			hideMessage();
			showRandom();
			showError();
		}


		
	}