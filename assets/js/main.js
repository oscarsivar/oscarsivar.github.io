	
	$(document).ready(function(){

		$('.alert.alert-success').hide();
		$('.alert.alert-danger').hide();
		showRandomHiragana();
		showRandomKatakana();

	});

	var hiragana = 
	["あ", "い", "う", "え", "お", "か", "き", "く", "け", "こ", 
	"さ" , "し", "す",	 "せ", "そ", "た", "ち", "つ", "て", "と",
	"な", "に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", 
	"ま", "み", "む", "め", "も", "や", "ゆ", "よ", "ら", "り",
	"る", "れ", "ろ", "わ", "ゐ", "ゑ", "を", "ん"];

	var katakana =
	["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ",
	"サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト",
	"ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ",
	"マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ラ", "リ",
	"ル", "レ", "ロ", "ワ", "ヲ", "ン"];


	var hiraganaLetter = document.getElementById("hiragana-letter");
	var katakanaLetter = document.getElementById("katakana-letter");



	function showRandomHiragana(){
		var letter= hiragana[Math.floor(Math.random() * hiragana.length)];
		hiraganaLetter.innerHTML = letter;
	}

	function showRandomKatakana(){
		var letter= katakana[Math.floor(Math.random() * katakana.length)];
		katakanaLetter.innerHTML = letter;
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



		
	function validateHiragana(){
		var letterToCheck = document.getElementById("letter-to-validate-hiragana").value;
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

		if(hiraganaLetter.innerHTML==letterToCheck){
			hideError();
			showRandomHiragana();
			showMessage();
			//setTimeout(hideMessage, 1000);
			
		}
		else {
			hideMessage();
			showError();
		}


		
	}






	function validateKatana(){
		var letterToCheck = document.getElementById("letter-to-validate-katakana").value;
		letterToCheck = letterToCheck.toLowerCase();

		switch (letterToCheck)
		{
			case "a":
				letterToCheck=katakana[0];
				break;
			case "i":
				letterToCheck=katakana[1];
				break;
			case "u":
				letterToCheck=katakana[2];
				break;
			case "e":
				letterToCheck=katakana[3];
				break;
			case "o":
				letterToCheck=katakana[4];
				break;
			case "ka":
				letterToCheck=katakana[5];
				break;
			case "ki":
				letterToCheck=katakana[6];
				break;
			case "ku":
				letterToCheck=katakana[7];
				break;
			case "ke":
				letterToCheck=katakana[8];
				break;
			case "ko":
				letterToCheck=katakana[9];
				break;
			case "sa":
				letterToCheck=katakana[10];
				break;
			case "si":
				letterToCheck=katakana[11];
				break;
			case "su":
				letterToCheck=katakana[12];
				break;
			case "se":
				letterToCheck=katakana[13];
				break;
			case "so":
				letterToCheck=katakana[14];
				break;
			case "ta":
				letterToCheck=katakana[15];
				break;
			case "ti":
				letterToCheck=katakana[16];
				break;
			case "tu":
				letterToCheck=katakana[17];
				break;
			case "te":
				letterToCheck=katakana[18];
				break;
			case "to":
				letterToCheck=katakana[19];
				break;
			case "na":
				letterToCheck=katakana[20];
				break;
			case "ni":
				letterToCheck=katakana[21];
				break;
			case "nu":
				letterToCheck=katakana[22];
				break;
			case "ne":
				letterToCheck=katakana[23];
				break;
			case "no":
				letterToCheck=katakana[24];
				break;
			case "ha":
				letterToCheck=katakana[25];
				break;
			case "hi":
				letterToCheck=katakana[26];
				break;
			case "hu":
				letterToCheck=katakana[27];
				break;
			case "he":
				letterToCheck=katakana[28];
				break;
			case "ho":
				letterToCheck=katakana[29];
				break;
			case "ma":
				letterToCheck=katakana[30];
				break;
			case "mi":
				letterToCheck=katakana[31];
				break;
			case "mu":
				letterToCheck=katakana[32];
				break;
			case "me":
				letterToCheck=katakana[33];
				break;
			case "mo":
				letterToCheck=katakana[34];
				break;
			case "ya":
				letterToCheck=katakana[35];
				break;
			case "yu":
				letterToCheck=katakana[36];
				break;
			case "yo":
				letterToCheck=katakana[37];
				break;
			case "ra":
				letterToCheck=katakana[38];
				break;
			case "ri":
				letterToCheck=katakana[39];
				break;
			case "ru":
				letterToCheck=katakana[40];
				break;
			case "re":
				letterToCheck=katakana[41];
				break;
			case "ro":
				letterToCheck=katakana[42];
				break;
			case "wa":
				letterToCheck=katakana[43];
				break;
			case "wo":
				letterToCheck=katakana[44];
				break;
			case "n":
				letterToCheck=katakana[45];
				break;

			default:
				console.log("no esta agregado aún!!")

		}

		if(katakanaLetter.innerHTML==letterToCheck){
			hideError();
			showRandomKatakana();
			showMessage();
			//setTimeout(hideMessage, 1000);

		}
		else {
			hideMessage();
			showError();
		}



	}