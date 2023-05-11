"use strict";

//===FUNCTION DECLARATION=====================================================================================================================================================

// function showMessage() {
// 	console.log('Hello World!');
// }
// showMessage();

// function showMessage(text) {
// 	console.log(text);
// }
// showMessage('Hello World');

// let num = 20;


// function showMessage(text) {
// 	console.log(text);
// 	num = 40
// }
// showMessage('Hello World');
// console.log(num);

//========================================================================================================================================================


// замыкание это сама функция вместе со всеми внешними переменными, которые ей доступны

// let num = 20;


// function showMessage(text) {
// 	console.log(text);
// 	console.log(num);
// }
// showMessage('Hello World');
// console.log(num);


// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));


// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); 

//========================================================================================================================================================


//===FUNCTION EXPRESSION=====================================================================================================================================================

// const logger = function() {
// 	console.log('Hello')
// };

// logger();

//===СТРЕЛОЧНАЯ ФУНКЦИЯ=====================================================================================================================================================

// const calc = (a, b) => a + b;

// const calc = (a, b) => {
// 	return (a + b);
// }

//===Пример про курс валют=====================================================================================================================================================

// function convert(amount) {
// 	console.log(28 * amount);
// }

// convert(500);

// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr) {
// 	console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


//========================================================================================================================================================


//===Про важность RETURN=====================================================================================================================================================

// например одна функция возващает результат, а другая выводит ее в консоль

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9

// function convert(amount, curr) {
// 	return curr * amount;
// }

// //например сумма будет уменьшена из-за скидки
// function promotion(result) {
// 	console.log(result * discount);
// }

// // promotion(convert(500,  usdCurr)); либо же

// const res = convert(500,  usdCurr);
// promotion(res);

// например в основе компонентов высшего порядка лежит то, что функция возвращает другую функцию

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9

// function convert(amount, curr) {
// 	return curr * amount;
// }

// //например сумма будет уменьшена из-за скидки
// function promotion(result) {
// 	console.log(result * discount);
// 	return function () {}
// }

// // promotion(convert(500,  usdCurr)); либо же

// const res = convert(500,  usdCurr);
// promotion(res);

// функцию можно использовать и без значения

// function test() {
// 	for (let i = 0; i < 5; i++) {
// 		console.log(i);
// 		if (i === 3) return
// 	}
// 	console.log('Done')
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined);

//===HOME WORK=====================================================================================================================================================


// Задачи:

// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// const userName = 'Vova'

// function sayHello(name) {
// 	console.log(`Привет: ${name}`);
// }

// sayHello(userName);

// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// function returnNeighboringNumbers(argument) {
// 	return[argument - 1, argument, argument + 1];
// }

// returnNeighboringNumbers(3);
// returnNeighboringNumbers(5);
// returnNeighboringNumbers(7);

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// function arithmeticProgression(base, repeats) {
// 	if (typeof repeats !== 'number' || repeats <= 0) {
// 		return base;
// 	}

// 	let result = `${base}`;
// 	let currenValue = base;

// 	for (let i = 1; i < repeats; i++) {
// 		currenValue += base;
// 		result += `---${currentValue}`;
// 	}
// 	return result;
// }

// console.log(arithmeticProgression(2, 5)); // "2---4---6---8---10"
// console.log(arithmeticProgression(0, 3)); // "0---0---0"
// console.log(arithmeticProgression(10, 0)); // 10
// console.log(arithmeticProgression(-3, "not a number")); // -3

// function getMathResult(num, times) {
// 	if (typeof(times) != 'number' || times <= 0) {
// 		return num
// 	}

// 	let str = '';

// 	for (let i = 1; i <= times; i++) {
// 		if (i === times) {
// 			str += `${num * i}`;
// 			//Тут без черточек вконце
// 		} else {
// 			str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
// 		}
// 	}
// 	return str;
// }

// getMathResult(10, 5);


//========================================================================================================================================================

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

// function start() {
// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// 	}
// }

// start();
// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false,
// };

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt('Один из последних просмотренных фильмов?', ''),
// 				b = prompt('На сколько оцените его', '');
	
// 		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 			personalMovieDB.movies[a] = b;
// 			console.log('done'); 
// 		} else {
// 			console.log('error');
// 			i--;
// 		}
// 	}
// }
// rememberMyFilms();

// function detectPersonalLevel() {
// 	if(personalMovieDB.count < 10) {
// 		console.log('Просмотрено довольно мало фильмов');
// 	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// 		console.log('Вы классический зритель');
// 	} else if (personalMovieDB.count >= 30) {
// 		console.log('Вы киноман');
// 	} else {
// 		console.log('Произошла ошибка');
// 	}
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
// 	for (let i = 1; i <= 3; i++) {
// 		// const genre = prompt(`Ваш любимый жанр под номером ${i}`);
// 		// personalMovieDB.genres[i - 1] = genre;

// 		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// 	}
// }

// writeYourGenres();

//

//===PRACTICE HOME WORK=====================================================================================================================================================

// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

// Примеры:

// calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// V = a * a * a;

// S = 6 * a * a;

// function calculateVolumeAndArea(number) {
// 	if (number % 1 !== 0 || typeof number === 'string' || number <= 0) {
// 		return 'При вычислении произошла ошибка';
// 	}
// 	// let result = `Объем куба: ${number ** 3}, площадь всей поверхности: ${(number ** 3) * 6}`;
// 	// return result;
// 	const volume = number ** 3;
// 	const surfaceArea = 6 * (number ** 2);
// 	return `Объем куба: ${volume}, площадь всей поверхности: ${surfaceArea}`;
// }

// console.log(calculateVolumeAndArea(3));

// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:



// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// Пример:

// getCoupeNumber(33)  => 9

// getCoupeNumber(7)  => 2

// getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// function getCoupeNumber(number) {
// 	if (isNaN(number) || number % 1 !== 0 || number < 0) {
// 		return `Ошибка. Проверьте правильность введенного номера места`
// 	}
// 	for (let i = 1; i <= 36; i++) {
// 		if (number > 36 || number === 0 ) {
// 			return `Ошибка. Проверьте правильность введенного номера места`;
// 		} else {
// 			return Math.ceil(number / 4);
// 		}
// 	}
// }

// console.log(getCoupeNumber(5));

// 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// Пример:

// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// function getTimeFromMinutes(minutesTotal) {
// 	if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
// 		 return "Ошибка, проверьте данные";
// 	}

// 	const hours = Math.floor(minutesTotal / 60);
// 	const minutes = minutesTotal % 60;

// 	let hoursStr = '';

// 	switch (hours) {
// 		 case 0: 
// 			  hoursStr = 'часов';
// 			  break;
// 		 case 1:
// 			  hoursStr = 'час';
// 			  break;
// 		 case 2:
// 		 case 3:
// 		 case 4:
// 			  hoursStr = 'часа';
// 			  break;
// 		 default:
// 			  hoursStr = 'часов';
// 	}

// 	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(180));

// 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:

// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// function findMaxNumber(a, b ,c, d) {
// 	// Самое простое - это использовать Math.max :)
// 	// А оптимизировать такую проверку мы научимся совсем скоро
// 	if (typeof(a) !== 'number' ||
// 		 typeof(b) !== 'number' ||
// 		 typeof(c) !== 'number' ||
// 		 typeof(d) !== 'number') {
// 		 return 0;
// 	} else {
// 		 return Math.max(a, b ,c, d);
// 	}
// }

// findMaxNumber(1, 5, 6.6, 10.5);
// findMaxNumber(1, 5, '6', '10');


Задача:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:

// fib(4) => ''0 1 1 2"

// fib(7) => ''0 1 1 2 3 5 8"

// fib('7') => ''"

// fib(1) => "0"

// fib(0) => ''"

// Задача непростая для новичков, так что с первого раза может не получится.


// function fib(num) {
// 	if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
// 		 return "";
// 	}

// 	let result = '';
// 	let first = 0;
// 	let second = 1;

// 	for (let i = 0; i < num; i++) {
// 		 if (i + 1 === num) {
// 			  result += `${first}`;
// 			  // Без пробела в конце
// 		 } else {
// 			  result += `${first} `;
// 		 }

// 		 let third = first + second;
// 		 first = second;
// 		 second = third;
// 	}

// 	return result;
// }

// fib(5)

//
