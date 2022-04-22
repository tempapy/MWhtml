


var elements = document.getElementsByTagName("a")
				
for(let i = 0; i < elements.length; i++){
	if (elements[i].getAttribute("deva")){
		var link = "../html_entries/"+elements[i].getAttribute("deva")+".html";
		elements[i].setAttribute("href", link);
	}
	
}
