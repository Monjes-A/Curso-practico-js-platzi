const ResultP = document.getElementById("ResultadoP");
const coupons = [
	{
		name: "aprendiendo",
		discount: 15,
	},
	{
		name: "Monjes",
		discount: 30,
	},
	{
		name: "es_un_secreto",
		discount: 25,
	},
];
const resultP = document.getElementById("ResultP");

function calcularPrecioConDescuento(PrecioOriginal, Descuento) {
	return (PrecioOriginal * (100 - Descuento)) / 100;
}

function onClickButtonPriceDiscount() {
	const preceSinvalue = document.getElementById("Precio");
	const priceValue = Number(preceSinvalue.value);
	const inputCoupon = document.getElementById("InputCoupon");
	const couponValue = inputCoupon.value;
    resultP.innerText = "El Cupon no es valido $ el precio sigue siendo $" + priceValue;



/* 	const isCouponValueValid = function (coupon) {
		return coupon.name === couponValue;
	}; */

	const userCoupon = coupons.find(coupon => coupon.name === couponValue);

	if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
}

else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    // resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    resultP.innerText = `El precio es de ${priceValue} y con el descuento del ${descuento}% es de: ${precioConDescuento}$`;

}
}
	/* 	let descuento;
	if (!coupons.includes(couponValue)) {
		alert("El cupón " + couponValue + " no es válido");
	} else if (couponValue === "JuanDC_es_Batman") {
		descuento = 15;
	} else if (couponValue === "pero_no_le_digas_a_nadie") {
		descuento = 30;
	} else if (couponValue === "es_un_secreto") {
		descuento = 25;
	} */

	/*   switch(couponValue) {
    case coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
    break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
    break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
    break;

	const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
	ResultP.innerText = `El Precio a Pagar es de ${precioConDescuento}`;
*/