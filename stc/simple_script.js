
var elements = document.getElementsByClassName("pc")
for (let i = 0; i < elements.length; i++) elements[i].href="https://www.sanskrit-lexicon.uni-koeln.de/scans/csl-apidev/servepdf.php?dict=STC&page="+elements[i].getAttribute("href").slice(21);


var elements = document.getElementsByTagName("a")
if (elements[i].href.includes("page=")) for (let i = 0; i < elements.length; i++) elements[i].target="_parent";
/*
var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	if (elements[i].getAttribute("href").includes("searchdeva")){
		var link = elements[i].getAttribute("href").slice(12);
		elements[i].setAttribute("href", link+".html");
	}
	else {
		var link = elements[i].getAttribute("href").slice(15);
		//elements[i].setAttribute("href", "../../html_entries/"+link+".html");
		elements[i].setAttribute("href", "../../?searchslp1="+link);
		//elements[i].setAttribute("onclick", "window.open('https://tempapy.github.io/SuperMonier/?searchslp1="+link+"', 'newwindow', 'width=500,height=600'); return false;");
	
		//elements[i].setAttribute("target", "_blank");
		//<a href=>Print</a>
	}
	
}
*/