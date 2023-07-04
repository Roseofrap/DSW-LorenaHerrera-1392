let evento = document.getElementById("btn_operar");

evento.addEventListener("click",function(){
     let operacion = document.getElementById("operacion").value;
     let numero1 = Number(document.ingreso.numero1.value);
     let numero2 = Number(document.ingreso.numero2.value);
     switch(operacion){
        case "suma":
            alert("el resultado de la suma es: "+suma(numero1,numero2));
        break;
        case "resta":
            alert("el resultado de la suma es: "+resta(numero1,numero2));
        break;
        case "multiplicacion":
            alert("el resultado de la suma es: "+multiplicacion(numero1,numero2));
        break:
        Case "division":
            alert("el resultado de la suma es: "+division(numero1, numero2));
        break;
            default:
                alert("opcion no valida");
        break;
    }
}); 
function suma(a,b){
    let res = Number (a+b);
    return res;
}
 function resta(a,b){
    let res = Number (a-b);
    return res;
}
 function multiplicacion(a,b){
    let res = Number (a*b);
    return res;
}
 function division(a,b){
    let res = Number (a/b);
    return res;
}