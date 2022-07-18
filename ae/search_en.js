var slp12deva_table = {
	"vowels":{
		"a": ["अ",""],
		"A": ["आ", "ा"],
		"i": ["इ", "ि"],
		"I": ["ई", "ी"],
		"u": ["उ", "ु"],
		"U": ["ऊ", "ू"],
		"f": ["ऋ", "ृ"],
		"F": ["ॠ", "ॄ"],
		"x": ["ऌ", "ॢ"],
		"X": ["ॡ", "ॣ"],
		"e": ["ए", "े"],
		"E": ["ऐ", "ै"],
		"o": ["ओ", "ो"],
		"O": ["औ", "ौ"]},
	"consonants": {
		"k": "क्",
		"K": "ख्",
		"g": "ग्",
		"G": "घ्",
		"N": "ङ्",
		"c": "च्",
		"C": "छ्",
		"j": "ज्",
		"J": "झ्",
		"Y": "ञ्",
		"w": "ट्",
		"W": "ठ्",
		"q": "ड्",
		"Q": "ढ्",
		"R": "ण्",
		"L": "ळ्",
		"|": "ळ्ह्",
		"t": "त्",
		"T": "थ्",
		"d": "द्",
		"D": "ध्",
		"n": "न्",
		"p": "प्",
		"P": "फ्",
		"b": "ब्",
		"B": "भ्",
		"m": "म्",
		"y": "य्",
		"r": "र्",
		"l": "ल्",
		"v": "व्",
		"S": "श्",
		"z": "ष्",
		"s": "स्",
		"h": "ह्"},
	"others":{
		"'": "ऽ",
		"H": "ः",
		"Z": "ᳲ",
		"V": "ᳲ",
		"M": "ं",
		"/": "॑",
		"^": "᳠"
	}
  }
  
  var slp12iast_weirdnesses_table = {
	"au": "aü", 
	"ai": "aï", 
	"kh": "kḧ",
	"gh": "gḧ",
	"ch": "cḧ",
	"jh": "jḧ",
	"wh": "ṭḧ",
	"qh": "ḍḧ",
	"Lh": "łḧ",
	"th": "tḧ",
	"dh": "dḧ",
	"ph": "pḧ",
	"bh": "bḧ"
  }
  var slp12iast_table = {
	"a": "a",
	"A": "ā",
	"i": "i",
	"I": "ī",
	"u": "u",
	"U": "ū",
	"f": "ṛ",
	"F": "ṝ",
	"x": "ḷ",
	"X": "ḹ",
	"e": "e",
	"E": "ai",
	"o": "o",
	"O": "au",
	"k": "k",
	"K": "kh",
	"g": "g",
	"G": "gh",
	"N": "ṅ",
	"c": "c",
	"C": "ch",
	"j": "j",
	"J": "jh",
	"Y": "ñ",
	"w": "ṭ",
	"W": "ṭh",
	"q": "ḍ",
	"Q": "ḍh",
	"R": "ṇ",
	"L": "ł",
	"|": "łh",
	"t": "t",
	"T": "th",
	"d": "d",
	"D": "dh",
	"n": "n",
	"p": "p",
	"P": "ph",
	"b": "b",
	"B": "bh",
	"m": "m",
	"y": "y",
	"r": "r",
	"l": "l",
	"v": "v",
	"S": "ś",
	"z": "ṣ",
	"s": "s",
	"h": "h",
	"H": "ḥ",
	"Z": "ẖ",
	"V": "ḫ",
	"M": "ṃ",
	"/": "́", 
	"^": "̀"
  }
  
  var iast2hk_table = {
	"ü": "-u", 
	"ï": "-i", 
	"ḧ": "-h",
	"ā": "A",
	"ī": "I",
	"ū": "U",
	"ṛ": "R",
	"ṝ": "RR",
	"ḷ": "lR",
	"ḹ": "lRR",
	"ṅ": "G",
	"ñ": "J",
	"ṭ": "T",
	"ḍ": "D",
	"ṇ": "N",
	"ł": "L",
	"ś": "z",
	"ṣ": "S",
	"ḥ": "H",
	"ẖ": "Z",
	"ḫ": "V",
	"ṃ": "M"
  }
  
  var hk2slp1_3c_table ={
	"lRR": "X",
	"a-u":"au", //Careful!
	"a-i":"ai", //Careful!
	"g-h":"gh" //Careful!
  }
  var hk2slp1_2c_table = {
	"RR": "F",
	"lR": "x",
	"ai": "E",
	"au": "O",
	"kh": "K",
	"gh": "G",
	"ch": "C",
	"jh": "J",
	"Th": "W",
	"Dh": "Q",
	"Lh": "|", //Careful!
	"th": "T",
	"dh": "D",
	"ph": "P",
	"bh": "B"
  }
  var hk2slp1_1c_table ={
	"a": "a",
	"A": "A",
	"i": "i",
	"I": "I",
	"u": "u",
	"U": "U",
	"R": "f",
	"e": "e",
	"o": "o",
	"k": "k",
	"g": "g",
	"G": "N",
	"c": "c",
	"j": "j",
	"J": "Y",
	"T": "w",
	"D": "q",
	"N": "R",
	"L": "L",
	"t": "t",
	"d": "d",
	"n": "n",
	"p": "p",
	"b": "b",
	"m": "m",
	"y": "y",
	"r": "r",
	"l": "l",
	"v": "v",
	"z": "S",
	"S": "z",
	"s": "s",
	"h": "h",
	"H": "H",
	"Z": "Z",
	"V": "V",
	"M": "M",
	"'": "'"
  }
  
  function iast2hk(input){
	var text = input
	for (i in iast2hk_table){
	  text = text.replaceAll(i, iast2hk_table[i])
	}
	return text;
  }
  
  function hk2slp1(input){
	
	var input = input;
	var output = "";
	while(input != ""){
	  found_c = false;
	  var slicedInput = input.slice(0, 3);
	  
	  for (item in hk2slp1_3c_table){
		if (item == slicedInput){
		  output += hk2slp1_3c_table[item];
		  input = input.slice(3);
		  found_c = true;
		  break;
		}
	  }
	  if (found_c == false){
		var slicedInput = input.slice(0, 2);
		for (item in hk2slp1_2c_table){
		  if (item == slicedInput){
			output += hk2slp1_2c_table[item];
			input = input.slice(2);
			found_c = true;
			break;
		  }
		}
	  }
	  if (found_c == false){
		var slicedInput = input.slice(0, 1);
		for (item in hk2slp1_1c_table){
		  if (item == slicedInput){
			output += hk2slp1_1c_table[item];
			input = input.slice(1);
			found_c = true;
			break;
		  }
		}
	  }
	  if (found_c == false){
		output += slicedInput;
		input = input.slice(1);
		found_c = true;
	  }
	}
	return output;
  }
  
  function slp12iast(input, accents=false) {
	var text = input;
  
  
	//Add fusions
	text = text.replaceAll("O<srs/>", "a͡u");
	text = text.replaceAll("E<srs/>", "a͡i");
	text = text.replaceAll("<srs/>", "̑");
	text = text.replaceAll(/([AIUFXEO])<shortlong\/>/gm, "$1̆");
	text = text.replaceAll("<shortlong/>", "̄̆");
	
	if (accents == false) {
	  text = text.replaceAll("/", "");
	  text = text.replaceAll("^", "");
	}
  
	for (item in slp12iast_weirdnesses_table){
	  text = text.replaceAll(item, slp12iast_weirdnesses_table[item]);
	}
	for (item in slp12iast_table){
	  text = text.replaceAll(item, slp12iast_table[item]);
	}
	return text;
  }
  
  function transcode_vowels(capture, match){
	var output = match;
	if (output == ""){
	  
	  return output;
	}
	else{
	  return slp12deva_table.vowels[output][0];
	}
  }
  function transcode_consonants(capture, match){
	var output = match;
	if (output == ""){
	  
	  return output;
	}
	else{
	  return slp12deva_table.consonants[output];
	}
  }
  
  function transcode_syllables(capture, match){
	var output = match;
	if (output == ""){
	  
	  return output;
	}
	else{
	  return slp12deva_table.consonants[output[0]].slice("0", "-1")+slp12deva_table.vowels[output[1]][1];
	}
  }
  
  function transcode_others(capture, match){
	var output = match;
	
	if (output == ""){
	  
	  return output;
	}
	else{
	
	  return slp12deva_table.others[output];
	}
  }
  
  function slp12deva(input, accents = false) {
  
  
	var text = input;
  
	text = text.replaceAll("<srs/>", "");
	text = text.replaceAll("<shortlong/>", "");
  
	if (accents == false) {
	  text = text.replaceAll("/", "");
	  text = text.replaceAll("^", "");
	}
  
	var slp1_vowels = "";
	for (c in slp12deva_table.vowels){
	  slp1_vowels += c;
	}
	var slp1_consonants = "";
	for (c in slp12deva_table.consonants){
	  slp1_consonants += c;
	}
	var slp1_others = "";
	for (c in slp12deva_table.others){
	  slp1_others += c;
	}
	
  
	
	for (i in slp1_consonants){
	  var c = slp1_consonants[i];
	  var regex = new RegExp("("+c+")"+"(?!["+slp1_vowels+"])", "g");
	  text = text.replaceAll(regex, transcode_consonants);
	}
	
	
	for (i in slp1_consonants){
	  var c = slp1_consonants[i];
	  var regex = new RegExp("("+c+"["+slp1_vowels+"])", "g");
	  text = text.replaceAll(regex, transcode_syllables);
	}
  
	for (i in slp1_vowels){
	  var c = slp1_vowels[i]
	  
	  var regex = new RegExp("("+c+")", "g");
	  
	  text = text.replaceAll(regex, transcode_vowels);
	  
	}
	
	for (i in slp1_others){
		var c = slp1_others[i];
	  var regex = new RegExp("("+c+")", "g");
	  text = text.replaceAll(regex, transcode_others);
	}
	
	return text;
  }
  
  var slp1_letters = "";
  for (c in slp12deva_table.vowels){
	slp1_letters += c;
  }
  for (c in slp12deva_table.consonants){
	slp1_letters += c;
  }
  slp1_letters += "HZVM"; //Visargas and anusvara too
  
  var searchInput = document.getElementById("search");
  var goInput = document.getElementById("go");
  var wordDiv = document.getElementById("word");
  var headerDiv = document.getElementById("header");
  var nextDiv = document.getElementById("next");
  var prevDiv = document.getElementById("prev");
  var dataDiv = document.getElementById("data");



  searchInput.addEventListener('keyup', function(e) {
  // Number 13 is the "Enter" key on the keyboard
	if (e.code === "Enter") {
	// Cancel the default action, if needed
	  e.preventDefault();
	  // Trigger the button element with a click
	  goInput.click();
	}
  });

  
goInput.onclick = function () {
	location.href = "?search="+searchInput.value;
};	
// Search json DB and send text data to html
document.addEventListener("DOMContentLoaded", function(){

	searchInput.focus()
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var searchQuery = urlParams.get('search')
  
	if ((searchQuery != "") && (searchQuery != null)){
		headerDiv.style.margin = "unset";
		// CODE :
		searchInput.value = searchQuery;
  
		if (searchQuery != ""){
			var requestURL = 'html_entries/_'+searchQuery+'.html'; // "_" to avoid "con.html" windows problem
			var request = new XMLHttpRequest();
			request.open('GET', requestURL);
			request.responseType = 'document';
			request.send();
			request.onload = function() {
			var htmlDef = request.response;
			if ((htmlDef != null)&&(htmlDef.getElementById("definition")!=null)){
				// Add definition to HTML
				wordDiv.innerHTML = searchQuery;
				dataDiv.innerHTML = htmlDef.body.innerHTML;
				var definitionDiv = document.getElementById("definition");

				if ("prev" in htmlDef) prevDiv.innerHTML = "<a href=\"?search="+htmlDef["prev"]+"\">◀ "+htmlDef["prev"]+"</a>";
				if ("next" in htmlDef) nextDiv.innerHTML = "<a href=\"?search="+htmlDef["next"]+"\">"+htmlDef["next"]+" ▶</a>";
				
				/*
				var elements = definitionDiv.getElementsByTagName("sk")
				
				for(let i = 0; i < elements.length; i++){
				}*/
				var elements = document.getElementsByClassName("pc")
				for (let i = 0; i < elements.length; i++) elements[i].href="https://www.sanskrit-lexicon.uni-koeln.de/scans/csl-apidev/servepdf.php?dict=AE&page="+elements[i].getAttribute("href").slice(20);


			}
			else {
				console.log("not found")
				headerDiv.style.margin = "auto";
				dataDiv.innerHTML = "<div style='text-align:center;'>The word <b>"+searchQuery+"</b> was not found.</div><br>";
			  }
		}
	  }
  
	  else{
		//empty string
		headerDiv.style.margin = "auto";
	  }
	}
  
  });

