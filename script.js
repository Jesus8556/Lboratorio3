function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 3.93;
    var euro = 3.95;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Soles a Dolares es: $"+resultado.toFixed(2))
    }else if(document.getElementById("dos").checked){
        resultado = valore/euro;
        alert("El cambio de Soles a Dolares es: $"+resultado.toFixed(2))
    }else{
        alert("Tienes que completar todos los espacios de numeros")
    }
}