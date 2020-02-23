"use strict"

// task 1
function Task1() {
	
var elements = document.querySelectorAll('ul.first > li');
fun(elements, "This is first ul");
var elements = document.querySelectorAll('ul.second > li');
fun(elements, "This is second ul");
var elements = document.querySelectorAll('ul.third > li');
fun(elements, "This is third ul");

//1  
function fun(elements, someText){
	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = someText;
	}
}

//2
elements = document.getElementsByTagName('li');
alert('The total number Li on the page are: ' + elements.length);

}


// task 2
function Task2(){
	var elements = document.querySelectorAll('a');
	for (let i = 0; i < elements.length; i++) {
		if((elements[i].matches('a[href^="http://"]') || elements[i].matches('a[href^="ftp://"]')) && !(elements[i].matches('a[href^="http://internal.com"]')))
			elements[i].classList.add("external-red") ;
	}
}
