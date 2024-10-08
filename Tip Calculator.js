let amount = document.getElementById("amount");
let percentage = document.getElementById("percentage");
let tipAmount = document.getElementById("tip");
let total = document.getElementById("totalAmount");

let errorMsg = document.getElementById("error");

function calculate() {
    if (amount.value === "") {
        errorMsg.textContent = "Please Enter the Bill Amount";
    } else if (percentage.value === "") {
        errorMsg.textContent = "Please Enter the Percentage tip"
    } else {
        let a = parseInt(amount.value);
        let p = parseInt(percentage.value);
        let tip = (p / 100) * a;
        tipAmount.value = tip;
        let totalA = a + tip;
        total.value = totalA;
        errorMsg.textContent = "";
    }


}