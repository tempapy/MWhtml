
var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	var link = elements[i].getAttribute("href").slice(12);
	//elements[i].setAttribute("href", "../../html_entries/"+link+".html");
	//elements[i].setAttribute("href", "https://tempapy.github.io/SuperMonier/?searchslp1="+link);
	elements[i].setAttribute("onclick", "window.open('https://tempapy.github.io/SuperMonier/?searchslp1="+link+"', '_system', 'width=500,height=600'); return false;");

	//elements[i].setAttribute("target", "_blank");
	//<a href=>Print</a>
}