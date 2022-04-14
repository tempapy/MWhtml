
var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	var link = elements[i].getAttribute("href").slice(12);
	elements[i].setAttribute("href", "https://tempapy.github.io/SuperMonier/?searchslp1="+link);
}