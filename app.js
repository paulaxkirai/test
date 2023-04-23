// zmienna = pojemnik w pamięci na dane = variable

// var userName = "Jan Kowalski";
// string - łańcuch znaków

// var totalMoney = 3000.5;
// number

// console.log(userName, totalMoney);

// const userName = "Jack";
// userName = "Matt!";
// console.log(userName);

// let userName = "John!";
// userName = "Rambo!";
// console.log(userName);

// console.log(userName, userSurname, userAge);
// const userFullName = userName + " " + userSurname + " " + userAge;
// const userFullName = `Imie zawodnika: ${userName}, nazwisko: ${userSurname}, wiek piłkarza: ${userAge}`;
// console.log(userFullName);

// const typeOfUserName = typeof userName;
// console.log(`typ userName to: ${typeOfUserName},
// a zwrocona wartość ma typ: ${typeof typeOfUserName}`);

// const typeOfUserAge = typeof userAge;
// console.log(typeOfUserName, typeOfUserAge);

// wartość logiczna: false, true - BOOLEAN

// const userHasMoney = true;
// const typeOfUserhasMoney = typeof userHasMoney;
// console.log(typeOfUserhasMoney);

// W procesie konwersji na wartość boolean, JS zamienia na false:
// pusty string, ZERO, undefined, null

// natomaist  na true zamieniane są:
// liczby rózne od 0, stringi, puste obiekty, puste tablice

// undefined, null - specjalny typ danych

// let userCountry = undefined;
// console.log(userCountry);
// userCountry = "Ireland";
// console.log(userCountry);

// const days = null;
// console.log(typeof days);

// const userName = "Robert";
// const userSurname = "Lewandowski";
// const userAge = 35;

// PRYMITYWNE TYPY DANYCH: string, number, boolean, undefined, null
// ZŁOŻONE TYPY DANYCH: obiekty, tablice - zbiory róznych typów danych

// const player1 = {
// 	userName: 'Robert',
// 	userSurname: 'Lewandowski',
// 	userAge: 35,
// 	clubs: [
// 		{ name: 'Znicz Pruszków', years: '2003 - 2005' },
// 		{ name: 'Legia Warszawa', years: '2005 - 2009' },
// 		{ name: 'BVB', years: '2009 - 15' },
// 		{ name: 'FCB', years: '2015 - 2022' },
// 		{ name: 'FC Barcelona', years: '2022 - now' },
// 		{ name: 'PSG', years: '2023-then' },
// 	],
// };

// const player2 = {
// 	userName: 'Piotr',
// 	userSurname: 'Zieliński',
// 	userAge: 29,
// 	clubs: [
// 		{ name: 'Empoli', years: '2013-17' },
// 		{ name: 'Napoli', years: '2017-now' },
// 	],
// };

// const players = [player1, player2];
// console.log(players.length);

// FUNKCJE - MINI PROGRAM  function nazwaFunkcji (deklaracja parametrów) {}
// funkcja przyjmuje dane i zwraca (retur) efekt wykonania ciała funckji
//function add2Numbers(num1, num2){ //num1,num2 parametry funckji. 
//const result = num1 + num2;
//return result;
//}
//const result = add2Numbers(1,2); //argument, przekazywany pod parametry



// const wordLenght = function (word){
//     return word.length;
// };
// console.log(wordLenght("wiosna, wiosna, ah to Ty!"));



// const editString = (value) => {
// //pozbywamy się białych znaków w stringu oraz zwracamy go w postaci wielkich liter
// //trim() oraz toUpperCase();
// //return value.trim();
// console.log(`liczba znaków przed edycją równa się: ${value.length}, 
// po usunięciu białych znaków parametr value ma: ${value.trim().length} znaków, `);
// };
// console.log(editString("    lorem ipsum     "));

// zmiana string na number
// const numAsString = "9.99";
// const convToNumber = (num) => {
//     console.log(`przed konwersją: ${typeof num}`);
// return Number(num);
// };
// console.log(typeof convToNumber(numAsString));

// funkcja która jako argument przyjmie tablice i zwróci jej długoś oraz wartoś ostatniego elementu

// const arrFunc = (arr) => {
//     // return arr.length;
//     // return arr[arr.length - 1];
// return [`długość: ${arr.length}`, `ostatni element: ${arr[arr.length-1]}`]; //pod indexem 1 długość, pod index2 ostatni element
// };
// console.log(arrFunc([100, 200, 300]));


// po return nie reaguje na kod, to co po returne nie obchodzi go

// stworz funkcje która przyjmie imię i zwróci je w formacie: Imie

const nameEdit = (userName) => {
const lowerCaseName = userName.toLowerCase();
const result = lowerCaseName[0].toUpperCase() + lowerCaseName.slice(1);
console.log(result);
};
nameEdit("oGniSko");
nameEdit("ola");
nameEdit("ala");