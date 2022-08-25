/*var ali = prompt("Please Name :")
var veli = prompt("Please Password :")

console.log("işine kurban " + ali + " seni yaradan ne güzel yaratmmış " + veli)*/
function Tikla() {
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)

    document.getElementById("p").innerHTML = sayi1 + sayi2
}

function Carp() {
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)

    document.getElementById("carp").innerHTML = sayi1 * sayi2

}

function Bol() {
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)

    document.getElementById("bol").innerHTML = sayi1 / sayi2

}

function Mod() {
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)

    document.getElementById("mod").innerHTML = sayi1 % sayi2

}

function Cikar() {
    var sayi1 = Number(document.getElementById("sayi1").value)
    var sayi2 = Number(document.getElementById("sayi2").value)

    document.getElementById("cikar").innerHTML = sayi1 - sayi2

}