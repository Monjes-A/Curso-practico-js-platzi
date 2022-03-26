const ResultP = document.getElementById("ResultadoP");
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function calcularPrecioConDescuento(PrecioOriginal, Descuento) {
	return (PrecioOriginal * (100 - Descuento)) / 100;
}

function onClickButtonPriceDiscount() {
	const priceValue  = Number(document.getElementById("Precio").value);
	const inputCoupon = document.getElementById("InputCoupon");
	const couponValue = inputCoupon.value;

    let descuento;

  switch(couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
    break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
    break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
    break;
  }
	const precioConDescuento  = calcularPrecioConDescuento(priceValue, descuento);
	ResultP.innerText = `El Precio a Pagar es de ${precioConDescuento}`;
}
