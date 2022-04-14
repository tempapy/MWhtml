
var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	var link = elements[i].getAttribute("href").slice(12);
	elements[i].setAttribute("href", "https://tempapy.github.io/SuperMonier/?searchslp1="+link);
	elements[i].setAttribute("onclick", "window.open('https://tempapy.github.io/SuperMonier/?searchslp1="+link+"', 'newwindow', 'width=300,height=250'); return false;");

	//elements[i].setAttribute("target", "_blank");
	//<a href=>Print</a>
}