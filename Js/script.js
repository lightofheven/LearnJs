"use srtict"


// if (11 == 2*5) {
//     console.log('ok!');
// } else {
//     console.log('Error');
// }
// console.log( 1 && 2 && 3 );


// console.log( !1 && 2 || !3 );


// console.log( 25 || null && !3 );


// console.log( NaN || null || !3 || undefined || 5);


// console.log( NaN || null && !3 && undefined || 5);


// console.log( 5 === 5 && 3 > 1 || 5);

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else {
//     console.log('Мы уходим');
// }

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 20; i > 13; --i) {
//     if(i === 12)
//     break;
//     console.log(i);
// }

// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0)
//     console.log(i); 
// }
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

    // const arrayOfNumbers = [];
    // for (let i = 5; i <= 10; i++) {
    // arrayOfNumbers[i - 5] = i;
    // }
    // console.log(arrayOfNumbers);
    // return arrayOfNumbers;

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];

    // for(let i = 0; i < arr.length; i++) {
    //     result[i] = arr[i];
    // }
    
    // console.log(result);
    // return result;

//     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }

//    } 
   
//    console.log(data);
//    return data;

    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for(let i = 1; i <= data.length; i++) {
    //     result[i - 1] = data[data.length - i]
    // }

    // console.log(result);
    // return result;

//     const lines = 5;
//     let result = '';

//     for (let i = 0; i <= lines; i++) {
//         for (let j = 0; j < lines - i; j++) {
//             result += " ";
//         }
//         for (let j = 0; j < 2 * i + 1; j++){
//             result += "*";
//         }
//         result += '\n';
//     }
//     console.log(result);

      
//     const lines = 6;
//     let result = '';
    
//     for(let i = 1; i <= lines + 1; i++) {

//     for (let j = i; j <= lines; j++) {
//         result += ' ';
//         }

//     let qtyStars = i * 2 - 1;   

//     for(let k = 1; k <= qtyStars; k++) {
//         result += '*';   
//         }
//     result += '\n';
// }
// console.log(result);





// function sayHello(name) {
//     return `Привет, ${name}!`;
//     }
//     sayHello('Антон');

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
//     }
//     returnNeighboringNumbers(5);

// function getMethResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//         console.log(str);
//     }
//     return str;
// }

// getMethResult(10,5);
    

// const usdCurr = 28;
// const eurCurr = 32;
// const rusCurr = 18; 

// function convert(amount, curr,) {
//     console.log(curr * amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);
// convert(500, rusCurr);



let number0Films;

function start() {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0Films == '' || number0Films == null || isNaN(number0Films)) {
        number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFimlms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренный фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done'); 
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFimlms();

 function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
     } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
     } else {
        console.log('Произошла ошибка');
     }
 }
 detectPersonalLevel();

 function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
 }
    
function writeYourGeneres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGeneres();