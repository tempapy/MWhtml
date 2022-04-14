
var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	var link = elements[i].getAttribute("href").slice(12);
	elements[i].setAttribute("href", "https://tempapy.github.io/SuperMonier/?searchslp1="+link);
	elements[i].setAttribute("target", "_blank");
	//<a href="javascript:window.open('print.html', 'newwindow', 'width=300,height=250')">Print</a>
}