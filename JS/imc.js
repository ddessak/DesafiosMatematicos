function calcular_icm() {
    var peso = parseFloat(document.getElementById("pes").value);
    var altura = parseFloat(document.getElementById("altur").value);
    var quadrado = (altura*altura);
    var imc = (peso/quadrado);
    if (imc>=18.5 && imc<24.9){
        alert("Você está no PESO IDEAL " + imc.toFixed(1));
    }
    else{
        if(imc>=17 && imc<18.49){
            alert("Você está ABAIXO DO PESO" + imc.toFixed(1));
                    
    }
        else if(imc<17){
            alert("Você está MUITO ABAIXO DO PESO " + imc.toFixed(1));
        }
        else if(imc>=25 && imc < 29.9){
            alert("Você está ACIMA DO PESO " + imc.toFixed(1));
        }
        else if(imc>=30 && imc < 34.9){
            alert("OBESIDADE I " + imc.toFixed(1));
        }
        else if(imc>=35 && imc<39.9){
        alert("OBESIDADE II (Severa) " + imc.toFixed(1));
        }
        else{
            alert("OBESIDADE III (MÓRBIDA) " + imc.toFixed(1));
    }
    }
    }