const ResultP= document.getElementById("ResultadoP");




function Preciocondescuento(PrecioOriginal,Descuento){
    return (PrecioOriginal*(100 - Descuento))/100
}

function CalcularDescuento(){
    const PrecioOriginal = Number(document.getElementById("Precio").value);
    const Descuento = Number(document.getElementById("Descuento").value);
    const funcion = Preciocondescuento(PrecioOriginal,Descuento);
    ResultP.innerText = `El Precio a Pagar es de ${funcion}`
}