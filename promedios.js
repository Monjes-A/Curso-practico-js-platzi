/* _____Calculo_De_La_Promedio_JS___________ */
const lista1 = [100, 200, 300, 400, 500, 600];
const lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const lista3 = [12, 1, 99, 50, 30];

/*
let sumaLista1=0

for (let i = 0; i < lista1.length; i++) {
 sumaLista1 = sumaLista1 + lista1[i];    
}

const promedioLista1 = sumaLista1 / lista1.length
 */

function calcularMediaAritmetica(lista) {
	/*    let sumaLista=0; --- una forma de hacerlo es con los siclos for pero usaremos el metodo de array.reduce 

 for (let i = 0; i < lista.length; i++) {
 sumaLista = sumaLista + lista[i];    
} */

	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});

	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}

/* _____Calculo_De_La_Mediana_JS___________ */

function esPar(numerito) {
	if (numerito % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function calcularMediana(lista) {
	let mediana;
	const listaOrdenada = lista.sort(function (a, b) {
		return a - b;
	});
	const mitadLista = parseInt(listaOrdenada.length / 2);

	if (esPar(lista.length)) {
		const elemento1 = lista[mitadLista - 1];
		const elemento2 = lista[mitadLista];
		mediana = (elemento1 + elemento2) / 2;
	} else {
		mediana = lista[mitadLista];
	}
	return mediana;
}

/* ____________________Calculo_De_La_Moda_JS___________ */
const lista4 = [
	1, 1, 2, 2, 2, 3, 4, 5, 4, 3, 2, 1, 5, 5, 5, 4, 3, 4, 4, 4, 4, 4, 4, 4, 3, 2,
	1,
];

function calcularModa(arr) {
	const lista1Count = {};
	arr.map(function (x) {
		if (lista1Count[x]) {
			lista1Count[x] += 1;
		} else {
			lista1Count[x] = 1;
		}
	});

	const lista1Array = Object.entries(lista1Count).sort(function (
		elementoA,
		elementoB
	) {
		return elementoA[1] - elementoB[1];
	});

	return lista1Array[lista1Array.length - 1];
}
