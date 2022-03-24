/* // Este es el Codigo del cuadrado
console.group("Cuadrado");
const ladosDelCuadrado = 5;
console.log(`los lados del cuadrado son ${ladosDelCuadrado} Cm`);

const PerimetroDelCuadrado = ladosDelCuadrado * 4;
console.log(`El Perimetro del cuadrado es de ${PerimetroDelCuadrado} Cm`);

const AreaDelCuadrado = ladosDelCuadrado ** 2;
console.log(`El area del cuadrado es de ${AreaDelCuadrado} Cm^2`);
console.groupEnd();

//Codigo del Triangulo
console.group("Triangulos");
const LadoTriangulo1 = 6;
const LadoTriangulo2 = 6;
const BaseTriangulo = 4;

console.log(
	`Los lados del Triangulo Miden ${LadoTriangulo1} Cm, ${LadoTriangulo2} Cm, y ${BaseTriangulo} Cm`
);

const AlturaTriangulo = Math.sqrt((LadoTriangulo1 ** 2) - ((BaseTriangulo/2) ** 2)); //*5.5;

console.log(`La Altura del triangulo es de ${AlturaTriangulo} Cm`);

const PerimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
console.log(`El Perimetro del Triangulo es de ${PerimetroTriangulo} Cm`);

const AreaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
console.log(`El Area del Triangulo es de ${AreaTriangulo} Cm^2`);

console.groupEnd();

//Codigo del circulo
console.group("circulo");
const RadioCirculo = 4;
const Diametro = RadioCirculo * 2;
const PI = Math.PI;

const PerimetroCirculo = Diametro * PI;

console.log(`El Perimetro del Circulo es de ${PerimetroCirculo} Cm`);

const AreaCirculo = RadioCirculo * RadioCirculo * PI;
console.log(`El Area del Circulo es de ${AreaCirculo} Cm^2`);

console.groupEnd();
 */

//v2 de calculadora de figuras

// Este es el Codigo del cuadrado
const PI = Math.PI;

function PerimetroDelCuadrado(ladosDelCuadrado) {
	return ladosDelCuadrado * 4;
}

function AreaDelCuadrado(ladosDelCuadrado) {
	return ladosDelCuadrado ** 2;
}

//este es el codigo del Triangulo

function AlturaTriangulo(LadoTriangulo1, BaseTriangulo) {
	return Math.sqrt(LadoTriangulo1 ** 2 - (BaseTriangulo /2) ** 2 );
}

function PerimetroTriangulo(LadoTriangulo1, LadoTriangulo2, BaseTriangulo) {
	return LadoTriangulo1 + LadoTriangulo2 + BaseTriangulo;
}

function AreaTriangulo(LadoTriangulo1, BaseTriangulo) {
	return (BaseTriangulo * (AlturaTriangulo(LadoTriangulo1, BaseTriangulo))) / 2;
}

//este es el codigo del circulo

function DiametroCirculo(RadioCirculo) {
	return RadioCirculo * 2;
}

function PerimetroCirculo(RadioCirculo) {
	let x = DiametroCirculo(RadioCirculo);
	return x * PI;
}

function AreaCirculo(RadioCirculo) {
	return RadioCirculo * RadioCirculo * PI;
}

// aqui interactuamos con el HTML del cuadrado

function CalcularPerimetroCuadrado() {
	const value = Number(document.getElementById("InputCuadrado").value);
	const resultado = PerimetroDelCuadrado(value);
	console.log(resultado);
}

function CalcularAreaCuadrado() {
	const value = Number(document.getElementById("InputCuadrado").value);
	const resultado = AreaDelCuadrado(value);
	console.log(resultado);
}

// aqui interactuamos con el HTML del Triangulo

function CalcularPerimetroTriangulo() {
	const Lado1 = Number(document.getElementById("InputLado1Triangulo").value);
	const Lado2 = Number(document.getElementById("InputLado2Triangulo").value);
	const Base = Number(document.getElementById("InputBaseTriangulo").value);
	const resultado = PerimetroTriangulo(Lado1, Lado2, Base);
	alert(`El perimetro del Triangulo es de ${resultado} cm`);
}

function CalcularAreaTriangulo() {
	const Lado1 = Number(document.getElementById("InputLado1Triangulo").value);
	const Base = Number(document.getElementById("InputBaseTriangulo").value);
	const resultadoareat = AreaTriangulo(Lado1,Base);
	alert(`El Area del Triangulo es de ${resultadoareat} cm^2`);
}

function CalcularAlturaTriangulo() {
	const Lado1 = Number(document.getElementById("InputLado1Triangulo").value);
	const Base = Number(document.getElementById("InputBaseTriangulo").value);
	const resultadoAlturat = AlturaTriangulo(Lado1,Base);
	alert(`El Altura del Triangulo es de ${resultadoAlturat} cm`);
}


// aqui interactuamos con el HTML del Circulo

function CalcularDiametroCirculo() {
	const value = Number(document.getElementById("InputRadio").value);
	const resultado = DiametroCirculo(value);
	alert(`El Diametro del circulo es de ${resultado} cm`);
}

function CalcularPerimetrocirculo() {
	const value = Number(document.getElementById("InputRadio").value);
	const resultado = PerimetroCirculo(value);
	alert(`El perimetro del circulo es de ${resultado} cm`);
}

function CalcularAreaCirculo() {
	const value = Number(document.getElementById("InputRadio").value);
	const resultado = AreaCirculo(value);
	alert(`El Area del circulo es de ${resultado} cm^2`);
}