//User Input 1 //
let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
/*                                          */
//Type Conversion->change the datatype of a value to another //

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("pizza")

console.log(x, typeof x)
console.log(y, typeof y);
console.log(z, typeof z);//el typeof + el nombre de la variable, indica en el console de que tipo es(stri,bool,num)

//Math
let a = 3.6;
a = Math.round(a);//redondea 0.49abajo/0.5 arriba
console.log(a)

let b = 3.99
b = Math.floor(b)//redondea siempre para abajo
console.log(b)

let c = 3.13;
c = Math.ceil(c);//redondea siempre para arriba
console.log(c);

let d = 3.17;
d = Math.pow(x, 2);//(base, exponent)
console.log(d);

let e = 3.15;
e = Math.sqrt(e);
console.log(e);

let f = 3.56;
f = Math.abs(f);//la distancia de cero
console.log(f);

let g = -3.14
let h = 5;
let i = 9;
let maximum;
let minimum;
maximum = Math.max(g, h, i)
minimum = Math.min(g, h, i)
console.log(maximum)
console.log(minimum)
