function calcular(){

    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    

    var delta = (b * b) - (4 * a * c)
    var raiz = (Math.sqrt(delta));
    var x1 = (- b + raiz) / (2 * a);
    var x2 = (- b - raiz) / (2 * a);

    if(delta>0){
        alert("O valor do primeiro x é: "+x1.toFixed(2));
        alert("O valor do segundo x é: "+x2.toFixed(2));
    }
    else if(delta==0){
        alert("Quando o valor de delta é igual a zero os valores dos dois x são iguais, que no caso é: "+ x1.toFixed(2));
    }
    else{
        alert("Delta negativo, por isso o valor não possui raizes, o valor de delta é: "+delta);

        }
    }
