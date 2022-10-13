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
      "h": "ह्"
  },
  "others":{
      "'": "ऽ",
      "H": "ः",
      "Z": "ᳵ",
      "V": "ᳶ",
      "M": "ं",
      "~": "ँ",
      "/": "", 
      "^": "",
      "\\":""
  }
}

var slp12iast_weirdnesses_table = {
  "a-u":"au",
  "a-i":"ai",
  "k-h":"kh",
  "g-h":"gh",
  "c-h":"ch",
  "j-h":"jh",
  "ṭ-h":"wh",
  "ḍ-h":"qh",
  "ł-h":"Lh",
  "t-h":"th",
  "d-h":"dh",
  "p-h":"ph",
  "b-h":"bh"
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
    "~": "̐",
    "'": "'",
    "/": "", 
    "^": "",
    "\\":""
}

var iast2hk_table = {
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
  "a-u":"au", 
  "a-i":"ai", 
  "k-h":"kh",
  "g-h":"gh",
  "c-h":"ch",
  "j-h":"jh",
  "T-h":"wh",
  "D-h":"qh",
  "L-h":"Lh",
  "t-h":"th",
  "d-h":"dh",
  "p-h":"ph",
  "b-h":"bh"
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
  "Lh": "|",
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
  "~": "~",
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
    var regex = new RegExp("(["+c.replaceAll(/([\^\-\]\\])/gm, "\\$1")+"])"+"(?!["+slp1_vowels.replaceAll("/([\^\-\]\\])/gm", "\\$1")+"])", "gm");
    text = text.replaceAll(regex, transcode_consonants);
  }
  
  
  for (i in slp1_consonants){
    var c = slp1_consonants[i];
    var regex = new RegExp("(["+c.replaceAll(/([\^\-\]\\])/gm, "\\$1")+"]["+slp1_vowels.replaceAll("/([\^\-\]\\])/gm", "\\$1")+"])", "gm");
    text = text.replaceAll(regex, transcode_syllables);
  }

  for (i in slp1_vowels){
    var c = slp1_vowels[i]
    
    var regex = new RegExp("(["+c.replaceAll(/([\^\-\]\\])/gm, "\\$1")+"])", "gm");
    
    text = text.replaceAll(regex, transcode_vowels);
    
  }
  
  for (i in slp1_others){
  	var c = slp1_others[i];
    var regex = new RegExp("(["+c.replaceAll(/([\^\-\]\\])/gm, "\\$1")+"])", "gm");

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



document.onclick = function(e) {
  if (!window.matchMedia('(hover: hover)').matches){
    allDropDowns = document.getElementsByClassName("dropdown");
    for(let i = 0; i < allDropDowns.length; i++){
      if (allDropDowns[i].getElementsByClassName("dropdowncontent").length){
        if (allDropDowns[i].getElementsByClassName("dropdowncontent")[0].style.display == "block"){
          allDropDowns[i].getElementsByClassName("dropdowncontent")[0].style.display = "none";
        }
      }
      console.log(allDropDowns[i].getElementsByClassName("dropbtn")[0].style.backgroundColor)
      if (allDropDowns[i].getElementsByClassName("dropbtn")[0].style.backgroundColor == "grey"){
        allDropDowns[i].getElementsByClassName("dropbtn")[0].style.backgroundColor = "transparent";
      }
    
    }
    //e.stopPropagation();
  }
};

searchInput.addEventListener('keyup', function(e) {
// Number 13 is the "Enter" key on the keyboard
  if (e.code === "Enter") {
  // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    goInput.click();
  }
});
  
// goInput.addEventListener('click', function () {
  
//   var searchQuerySLP1 = hk2slp1(searchInput.value, hk2slp1_3c_table, hk2slp1_2c_table, hk2slp1_1c_table)
    
//   var searchQueryDeva = slp12deva(searchQuerySLP1, slp12deva_table);
  
//   location.href = "index.html?search="+searchQueryDeva+"&hk="+iast2hk(slp12iast(searchQuerySLP1, slp12iast_table), iast2hk_table);

// });

goInput.onclick = function () {
  location.href = "?search"+inputInput.value+"="+searchInput.value;
  //location.href = "?search=अत्याहित"
  
};

// Choose input type
var inputInput = document.getElementById("inputType");
inputInput.onchange = function() {
  //this.attr("disabled", "true");
  localStorage.setItem('inputType', inputInput.value);
  console.log("on udpate", inputInput.value)
};

// Search json DB and send text data to html
document.addEventListener("DOMContentLoaded", function(){

  // Load previous input type:
  if (localStorage.getItem('inputType') != null){
    inputInput.value = localStorage.getItem('inputType');
    console.log("on load", inputInput.value)
  }
  

  searchInput.focus()
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var searchQuery = urlParams.get('searchslp1');

   if ((searchQuery == null) && (urlParams.get('searchhk') != null)){
    searchQuery = urlParams.get('searchhk');
    searchInput.value = searchQuery;
    searchQuery = hk2slp1(searchQuery);
    var searchQueryDeva = slp12deva(searchQuery);
  } 
  
  else if ((searchQuery == null) && (urlParams.get('searchdeva') != null)) {
    searchQuery = urlParams.get('searchdeva'); // Dirty
    searchInput.value = searchQuery;
    var searchQueryDeva = searchQuery;
  } 
  else if ((searchQuery == null) && (urlParams.get('searchiast') != null)) {
    searchQuery = urlParams.get('searchiast'); 
    searchInput.value = searchQuery;
    searchQuery = hk2slp1(iast2hk(searchQuery));
    var searchQueryDeva = slp12deva(searchQuery);
  } 
/*
  else{
    var searchQueryDeva = slp12deva(searchQuery);
    if (inputInput.value == "hk") searchInput.value = iast2hk(slp12iast(searchQuery));
    else if (inputInput.value == "iast") searchInput.value = slp12iast(searchQuery);
    else if (inputInput.value == "deva") searchInput.value = slp12deva(searchQuery);
  }
  */


  var wilInput = document.getElementById("wilButton");

  wilInput.onclick = function () {
    
    var deva_consonants = "";
        for (c in slp12deva_table.consonants){
          deva_consonants += slp12deva_table.consonants[c];
        }
    var address_wil = "wil/html_entries/"+searchQueryDeva.replace(RegExp("र्"+"(["+deva_consonants+"])", "gm"),'र्$1्$1')+".html";
    console.log(address_wil)
    var wilDiv = document.getElementById("wil");
    console.log(address_wil)
    fetch(address_wil)
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (response) {
        var iframeWil = document.createElement("iframe");
        iframeWil.setAttribute("src", address_wil);
        iframeWil.setAttribute("style", "width: 100%;margin:0;padding:0;");
        wilDiv.appendChild(iframeWil);
    })
    .catch(function (response) {
        // "Not Found"
        var address_wil = "wil/html_entries/"+searchQueryDeva+".html";
        fetch(address_wil)
        .then(function (response) {
            switch (response.status) {
                // status "OK"
                case 200:
                    return response.text();
                // status "Not Found"
                case 404:
                    throw response;
            }
        })
        .then(function (response) {
            var iframeWil = document.createElement("iframe");
            iframeWil.setAttribute("src", address_wil);
            iframeWil.setAttribute("style", "width: 100%;margin:0;padding:0;");
            wilDiv.appendChild(iframeWil);
        })
        .catch(function (response) {
            // "Not Found"
            wilDiv.innerHTML="Not in Wilson. ";
            wilDiv.style.border = 'dotted';
            wilDiv.style.borderWidth = '0.15em';
            wilDiv.style.padding = '0.5em';
          });
      });
    wilInput.style.display = 'none';
    
  };
  if ((searchQuery != "") && (searchQuery != null)){
    headerDiv.style.margin = "unset";
    // CODE :

    

    if (searchQueryDeva != ""){

      // Set WIL button
      var wilInput = document.getElementById("wilButton");

      wilInput.style.display = 'block';

      // Get STC definition
      var iframeDiv = document.getElementById("iframe");
      /*
      var client = new XMLHttpRequest();
      client.onreadystatechange = function() {
       // in case of network errors this might not give reliable results
       if(this.readyState == 4)
        if(this.status == 200) {
          // send an event
          var iframeDiv = document.getElementById("iframe");
          var iframe = document.createElement("iframe");
          iframe.setAttribute("src", address);
          iframe.setAttribute("style", "width: 100%;margin:0;padding:0;")
          iframeDiv.appendChild(iframe)
        }
        else {
          // send a different event
          //console.log("no stc def found")
        }
      }
      client.open("HEAD", address);
      client.send();
      */
      
      var address = "stc/html_entries/"+searchQueryDeva+".html";

      alternatives = [address]
      var found = false
      for(let i = 0; i < alternatives.length; i++){
        if (!found){
          fetch(alternatives[i])
          .then(function (response) {
              switch (response.status) {
                  // status "OK"
                  case 200:
                      found = true;
                      return response.text();
                  // status "Not Found"
                  case 404:
                      console.log(i, alternatives.length-1)
                      if (i == alternatives.length-1) throw response;
              }
          })
          .then(function (response) {
              
                var iframe = document.createElement("iframe");
                iframe.setAttribute("src", alternatives[i]);
                iframe.setAttribute("style", "width: 100%;");
                iframeDiv.appendChild(iframe);
          })
          .catch(function (response) {
              // "Not Found"
              if (i == alternatives.length-1){
                iframeDiv.innerHTML="Absent du Stchoupak. Les noms à plusieurs thèmes, à finale consonantique, les mots composés, les dénominatifs, etc. ne sont pas forcément listés sous la même entrée entre les deux dictionnaires. ";
                iframeDiv.style.border = 'dotted';
                iframeDiv.style.borderWidth = '0.15em';
                iframeDiv.style.padding = '0.5em';
              }
            });
          if (found) break;
        }
        
      }
      
      // Strip header

      var requestURL = 'html_entries/'+searchQueryDeva+'.html';
      var request = new XMLHttpRequest();
      request.open('GET', requestURL);
      request.responseType = 'document';
      request.send();
      request.onload = function() {
      var htmlDef = request.response;
        if ((htmlDef != null)&&(htmlDef.getElementById("definition")!=null)){
          // Add definition to HTML
          wordDiv.innerHTML = searchQueryDeva;
          dataDiv.innerHTML = htmlDef.body.innerHTML;
          
          var definitionDiv = document.getElementById("definition");
          
          if (inputInput.value == "hk") searchInput.value = iast2hk(slp12iast(definitionDiv.getAttribute('slp1')));
          else if (inputInput.value == "iast") searchInput.value = slp12iast(definitionDiv.getAttribute('slp1'));
          else if (inputInput.value == "deva") searchInput.value = slp12deva(definitionDiv.getAttribute('slp1'));

          var titleDivs = document.getElementsByTagName("title");
          titleDivs[0].innerHTML = "Super Monier — " + searchQueryDeva;
          var elements = definitionDiv.getElementsByTagName("ab")
          
          for(let i = 0; i < elements.length; i++){
            if (elements[i].children.length == 0){
              elements[i].onclick = function(e){
                if ((!this.hasAttribute("expanded"))){
                  this.setAttribute("expanded", this.textContent);
                  this.textContent = this.getAttribute("title");
                }
                else {
                  
                  this.textContent = this.getAttribute("expanded");
                  this.removeAttribute("expanded");
                }
                //e.stopPropagation();
              };
            }
            
          }

          var elements = definitionDiv.getElementsByTagName("ls")
          
          for(let i = 0; i < elements.length; i++){
            elements[i].onclick = function(e){
              if ((!this.hasAttribute("expanded"))){
                this.setAttribute("expanded", this.textContent);
                this.textContent = this.getAttribute("title");
                this.style.fontVariant = "none";
              }
              else {
                
                this.textContent = this.getAttribute("expanded");
                this.removeAttribute("expanded");
                this.style.fontVariant = "small-caps slashed-zero";
              }
              //e.stopPropagation();
            };
          }

          var elements = definitionDiv.getElementsByClassName("dropdown")
          for(let i = 0; i < elements.length; i++){
            elements[i].onclick = function(e) {
              if (!window.matchMedia('(hover: hover)').matches){
                
                allDropDowns = document.getElementsByClassName("dropdown");
                
                for(let i = 0; i < allDropDowns.length; i++){
                  if (allDropDowns[i].getElementsByClassName("dropdowncontent").length) {
                    if (allDropDowns[i].getElementsByClassName("dropdowncontent")[0].style.display == "block"){
                      allDropDowns[i].getElementsByClassName("dropdowncontent")[0].style.display = "none";
                    }
                  }
                  if (allDropDowns[i].getElementsByClassName("dropbtn")[0].style.backgroundColor == "grey"){
                    allDropDowns[i].getElementsByClassName("dropbtn")[0].style.backgroundColor = "transparent";
                  }
                  
                  
                
                }
                if (this.getElementsByClassName("dropdowncontent").length){
                  
                  if (getComputedStyle(this.getElementsByClassName("dropdowncontent")[0]).display == "none"){ //this.getElementsByClassName("dropdowncontent")[0].style.display
                    
                    
                    this.getElementsByClassName("dropdowncontent")[0].style.display = "block";
                  }
                }
                  
                  // else{
                  //   this.getElementsByClassName("dropdowncontent")[0].style.display = "none";
                  // }
                  
                  if (this.getElementsByClassName("dropbtn")[0].style.backgroundColor == "transparent"){
                    this.getElementsByClassName("dropbtn")[0].style.backgroundColor = "grey";
                  }
                  // else{
                  //   this.getElementsByClassName("dropbtn")[0].style.backgroundColor = "none";
                  // }
                  e.stopPropagation();
              }
              
            };
          }

          var elements = document.getElementsByClassName("pc")
          for (let i = 0; i < elements.length; i++) elements[i].href="https://www.sanskrit-lexicon.uni-koeln.de/scans/csl-apidev/servepdf.php?dict=MW&page="+elements[i].getAttribute("href").slice(20);

          var elements = document.getElementsByClassName("root")
          for (let i = 0; i < elements.length; i++) elements[i].href="https://www.sanskrit-lexicon.uni-koeln.de/scans/csl-whitroot/disp/index.php?page="+elements[i].getAttribute("href").slice(23);

          var elements = document.getElementsByClassName("sklink")
          for (let i = 0; i < elements.length; i++) elements[i].href="?searchdeva="+elements[i].getAttribute("href").slice(0, -5);

          var element = document.getElementById("next")
          
          element.firstChild.href="?searchdeva="+element.firstChild.getAttribute("href").slice(0, -5);
          var element = document.getElementById("prev")
          element.firstChild.href="?searchdeva="+element.firstChild.getAttribute("href").slice(0, -5);
           
          var elements = document.getElementsByClassName("children")
          for (let i = 0; i < elements.length; i++){
            var links = elements[i].children
            for (let j = 0; j < links.length; j++) links[j].href ="?searchdeva="+ links[j].getAttribute("href").slice(0, -5);
          } 

          var elements = document.getElementsByClassName("parents")
          for (let i = 0; i < elements.length; i++){
            var links = elements[i].children
            for (let j = 0; j < links.length; j++) links[j].href ="?searchdeva="+ links[j].getAttribute("href").slice(0, -5);
          } 
          
          var elements = document.getElementsByClassName("sklink")
          for (let i = 0; i < elements.length; i++) {
            if (window.matchMedia('(hover: hover)').matches){
              elements[i].onmouseover = function(e) {
                if (this.firstElementChild == null) {
                  var iframe = document.createElement("iframe")
                  iframe.setAttribute("src", "html_entries/"+slp12deva(this.getAttribute("href").slice(12))+".html")
                  iframe.style.position = "fixed";
                  iframe.style.zIndex = 2;
                  iframe.style.margin = 0;
  
                  iframe.style.border = 0;
                  iframe.style.height = "300px";
                  iframe.onload = function(){
                    var initrect = this.parentElement.getBoundingClientRect();
                    this.style.top = Math.round(initrect.top).toString()+"px";
                    this.style.left = Math.round(initrect.left+(initrect.right-initrect.left)).toString()+"px";
                    var rect = this.getBoundingClientRect();
                    if (rect.right > document.body.offsetWidth && Math.round(initrect.left - (rect.right-rect.left)) > 0){
                      this.style.left = Math.round(initrect.left - (rect.right-rect.left)).toString()+"px"
                    }
                    if (rect.bottom > document.body.offsetHeight && Math.round(initrect.top - (rect.bottom-rect.top)) > 0){
                      this.style.top = Math.round(initrect.top - (rect.bottom-rect.top)+50).toString()+"px"
                    }

                  iframe.style.border = "solid";
                  }
                  this.prepend(iframe)
                  var body = iframe.contentWindow.document.getElementsByTagName('body')[0];
                  var script = iframe.contentWindow.document.createElement('script');
                  script.innerText = ``;
                  script.type = 'text/javascript';
                  body.appendChild(script);
                  
                }
                else{
                  this.firstElementChild.style.display = '';
                  if (!window.matchMedia('(hover: hover)').matches){
                    this.style.top = "50%"
                    this.style.left = "50%"
                    this.style.transform = "translate(-50%,-50%)" 
                  }
                  else{
                    var initrect = this.getBoundingClientRect();
                    this.firstElementChild.style.top = Math.round(initrect.top).toString()+"px";
                    this.firstElementChild.style.left = Math.round(initrect.left+(initrect.right-initrect.left)).toString()+"px";
                    
                    var rect = this.firstElementChild.getBoundingClientRect();
                    if (rect.right > document.body.offsetWidth  && Math.round(initrect.left - (rect.right-rect.left)) > 0){
                      this.firstElementChild.style.left = Math.round(initrect.left - (rect.right-rect.left)).toString()+"px"
                    }
                    if (rect.bottom > document.body.offsetHeight && Math.round(initrect.top - (rect.bottom-rect.top)) > 0){
                      this.firstElementChild.style.top = Math.round(initrect.top - (rect.bottom-rect.top)+50).toString()+"px"
                    }
                  }        
                }
              };
              elements[i].onmouseout = function(e) {
                  this.firstElementChild.style.display = 'none';
              };
            }
            
          }
        }
        else {
          console.log("not found")
          headerDiv.style.margin = "auto";
          dataDiv.innerHTML = "<br><div>The word "+slp12iast(searchQuery)+" was not found. </div><br>";
        /*If it is a consonant-ending word, try with/without sandhi. If it is a noun with stem gradation, try another grade. If it is a denominative verb, search the -aya- stem or just the radical (i.e. the noun).*/
        }
      }
    }

    else{
      //empty string
      headerDiv.style.margin = "auto";
    }
  }

});
