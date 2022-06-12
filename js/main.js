function readMoreOne() {

	let dotsOne = document.getElementById("dotsOne");
	let moreOne = document.getElementById("moreOne");
	let btnOne = document.getElementById("btnOne");
	
	if(dotsOne.style.display === "none"){
		 dotsOne.style.display = "inline";
		 btnOne.innerHTML = "Подробнее";
		 moreOne.style.display = "none";
	 } else {
		 dotsOne.style.display = "none";
		 btnOne.innerHTML = "Скрыть";
		 moreOne.style.display = "inline";
	 }
 }
 
