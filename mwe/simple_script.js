

var elements = document.getElementsByClassName("pc")
for (let i = 0; i < elements.length; i++) elements[i].href="https://www.sanskrit-lexicon.uni-koeln.de/scans/csl-apidev/servepdf.php?dict=MWE&page="+elements[i].getAttribute("href").slice(21);
