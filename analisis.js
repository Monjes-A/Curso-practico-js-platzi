const saliosVe = Venezuela.map(function (personita) {
	return personita.salary;
});

const sortSalary = saliosVe.sort((a, b) => a - b);

function calcularMediaAritmetica(lista) {
	const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
		return valorAcumulado + nuevoElemento;
	});

	const promedioLista = sumaLista / lista.length;
	return promedioLista;
}
function esPar(numerito) {
	return numerito % 2 === 0;
}

function medianaSalarios(lista) {
	const mitad = parseInt(lista.length / 2);
	if (esPar(lista.length)) {
		const PersonitaMitad1 = lista[mitad - 1];
		const PersonitaMitad2 = lista[mitad];
		const mediana = calcularMediaAritmetica([PersonitaMitad1, PersonitaMitad2]);
		return mediana;
	} else {
		const mediana2 = lista[mitad];
		return mediana2;
	}
}

/* Calculando el top 10% de salarios */

const spliceStart = (sortSalary.length * 90) / 100;
const spliceCount = (sortSalary.length - spliceStart);

const salariosTop10 = sortSalary.splice(spliceStart,spliceCount);