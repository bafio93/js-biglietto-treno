alert("Salve utente!")
// Asking user for data... And checking it too! Also "initialize" the price variable.
var price;
var anni = parseInt(prompt("Quanti anni hai?"));
var km = parseFloat(prompt("Quanti chilometri devi percorrere?"));
if (isNaN(anni)==true || isNaN(km)==true) {
    document.getElementById("price").innerHTML = "Uno dei dati inseriti non è un numero! Ricarica la pagina ed inserisci qualcosa di sensato... :(";
}
else if (anni < 1 || km < 1) {
    document.getElementById("price").innerHTML = "Inserisci dei dati che abbiano senso logico!!! :(";
}
// Let's define price variable, based on age, through the usage of nested ifs!
else if (anni < 18) {
    price = 0.21 * km * 0.8;
    document.getElementById("price").innerHTML = price;
}
else if (anni > 65) {
    price = 0.21 * km * 0.6;
    document.getElementById("price").innerHTML = price;
}
else {
    price = 0.21 * km * 1;
    document.getElementById("price").innerHTML = price;
}
