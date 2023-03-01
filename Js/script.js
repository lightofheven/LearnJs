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


const number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: number0Films,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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
 if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы класический зритель');
 } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
 } else {
    console.log('Произошла ошибка');
 }
    
console.log(personalMovieDB);
