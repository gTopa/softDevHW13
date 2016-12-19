//send diagnostic output to console
//(Ctrl-Shift-J in Chromium & Firefox to reveal console)
console.log("AYO");
var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
    var j=30;
    return j+x;
};


//(define fact (lambda (n) ...)
var fact = function(n) {
    var prod=1;
    for ( ; n > 1 ; n--){
	prod = prod * n;
    }
    return prod;
};


//(define fact (lambda (n) ...)
var factR = function(n) {
    if ( n<=1 ) {
	return 1;
    }
    else {
	return n * factR(n-1);
    }
};

var changeHeader = function(){
    document.getElementById("h").innerHTML =this.innerHTML;
};

var mouseOut = function(){
    document.getElementById("h").innerHTML="Hello World!";
}

//add list item 
var addItem = function() {
    var list = document.getElementById("thelist");
    //getting list of elements
    var listLi = list.getElementsByTagName("li");
    var newitem = document.createElement("li");
    var lastItem=listLi[listLi.length-1];
    lastItem=lastItem.innerHTML;
    console.log(lastItem);
    newitem.innerHTML = "item "+(parseInt(lastItem.substring(lastItem.indexOf(" ")).toString())+1).toString();
    newitem.addEventListener("mouseover", changeHeader);
    newitem.addEventListener("click", function(){
        this.remove()
    });
    newitem.addEventListener("mouseout", mouseOut);
    list.appendChild(newitem);
};


//remove specified item from list
var removeItem = function(n) {
    var listitems = document.getElementsByTagName('li');
    listitems[n].remove();
};


var red = function() {
    var items = document.getElementsByTagName("li");
    for(var i = 0; i < items.length; i++) {
	items[i].classList.add('red');
    }
};


//instantiate an object
var o = { 'name' : 'Thluffy',
	age : 15,
    items : [10, 20, 30, 40],
	morestuff : {a : 1, b : 'ayo'},
	func : function(x) {
	return x+30;
	}
};

var fib=function(num){
    var x = 1;
    var y = 0;
    while (num >= 0){
        var tmp = x;
        x += y;
        y = tmp;
        num--;

    }
    return x;
};


var addFib = function() {
    var list = document.getElementById("fibList");
    //getting list of elements
    var newitem = document.createElement("li");
    newitem.innerHTML= fib (list.childElementCount)
    newitem.addEventListener("mouseover", changeHeader);
    newitem.addEventListener("click", function(){
        this.remove()
    });
    newitem.addEventListener("mouseout", mouseOut);
    list.appendChild(newitem);
};

var b=document.getElementById('b');
b.addEventListener('click',addItem);  

var items = document.getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            this.remove()
            } 
        );
        items[i].addEventListener("mouseover", changeHeader);
        items[i].addEventListener("mouseout", mouseOut);
        
    };

var f=document.getElementById('fibButton');
f.addEventListener('click', addFib);
console.log("hello");

var addTwo = function() {
    var list = document.getElementById("powersOfTwoList");
    //getting list of elements
    var listLi = list.getElementsByTagName("li");
    var newitem = document.createElement("li");
    if(listLi.length!=0){
	var lastItem=listLi[listLi.length-1];
	lastItem=lastItem.innerHTML;
    };
    if(listLi.length==0){
	var lastItem="item 1";
	
    };
    console.log(lastItem);
    newitem.innerHTML = "item "+(2*(parseInt(lastItem.substring(lastItem.indexOf(" ")).toString()))).toString();
    newitem.addEventListener("mouseover", changeHeader);
    newitem.addEventListener("click", function(){
        this.remove()
    });
    newitem.addEventListener("mouseout", mouseOut);
    list.appendChild(newitem);
};

var square=function(num){
    return Math.pow(2,num);
};

var g=document.getElementById('powersOfTwo');
g.addEventListener('click', addTwo);
console.log("hello");


