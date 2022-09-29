let total = 0.00; // Global variabel, nulstiller total, bruger let istedet for const, fordi total kommer til at ændre sig undervejs
visTotal(); //Kalder funktion til visning af total

//Laver en objektsliste med alle checkbokse
const checkbokse = document.getElementsByClassName ("iliste");
for (const checboks of checkbokse){
    checkbokse.addEventListener ("change", function () {
        if (this.checked === true) { //hvis der vælges en vare, så...
            total = Math.abs(total + parseFloat(this.value)); //parsefloat konvertere vores value i html til tal. Math.abs sørger for at det ikke bliver minus
        }
        else { //Hvis der fravælges en vare, så...
            total = Math.abs (total - parseFloat(this.value));
        }
        visTotal();
    })
}

function visTotal() {
    const output = document.getElementById("totalfelt");
    //Total udskrives i dansk valutaformat med kr.
    output.innerText = `Total: ${total.toLocaleString("da-DK", {style: "currency", currency: "DKK"})}`;
}