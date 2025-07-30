let length;
let breadth;
let area;

document.getElementById("submit").onclick = function(){
    length= document.getElementById("t1").value;
    breadth= document.getElementById("t2").value;
    length=Number(length);
    breadth=Number(breadth);
    area= length * breadth;
    document.getElementById("res").textContent= "The area is "+ area + " cm²";
}