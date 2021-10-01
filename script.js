

// Создать функцию с замыканием, из который вернуть массив чисел [1,2,3,4,5,6,7];
function getArray() {
	const arr = [];
	return function b(c) {
		if (c === 0) {
			return 1
		}
		else {
			arr.unshift(c)
			b(c - 1)
			return arr
		}
	}
}

const newArray = getArray()
console.log(newArray(7))


// Написать рекурсивную функцию, которая будет принимать как аргумент массив и 
// индекс( индекс не должен быть больше, чем кол-во элементов массива,
// проверки пока упускаем)

// Функция должна считать сумму чисел элементов массива,
// началом будет индекс переданный как аргумент в данную функцию.

const index = 4;

function summ(a, i) {
	if (i === 0) {
		return a[i]
	} else {
		return a[i] + summ(a, i - 1)
	}
};

const sum = summ(newArray(7), index); //newArray - массив, сгенерированный предыдущей функцией
console.log(sum)








