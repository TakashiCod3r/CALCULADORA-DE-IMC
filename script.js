function calculate() {
    let height = (document.getElementById("height").value) / 100;
    let weight = document.getElementById("weight").value;

    let imc = weight / height ** 2;
    let text =""

    if (imc < 18.5) {
        text="Você está magro"
    } else if (imc < 24.9) {
        text="Você está normal";
    } else if (imc < 29.9) {
        text="Você está com sobrepeso";
    } else if (imc < 39.9) {
        text="Você está com obesidade";
    } else if (imc > 39.9) {
        text="Você está com obesidade mórbida";
    }
    document.getElementById("text_area").innerText=text
}

