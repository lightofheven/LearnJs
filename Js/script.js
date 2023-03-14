"use srtict"


// // if (11 == 2*5) {
// //     console.log('ok!');
// // } else {
// //     console.log('Error');
// // }
// // console.log( 1 && 2 && 3 );


// // console.log( !1 && 2 || !3 );


// // console.log( 25 || null && !3 );


// // console.log( NaN || null || !3 || undefined || 5);


// // console.log( NaN || null && !3 && undefined || 5);


// // console.log( 5 === 5 && 3 > 1 || 5);

// // const hamburger = 3;
// // const fries = 3;
// // const cola = 0;
// // const nuggets = 2;


// // if (hamburger === 3 && cola || fries === 3 && nuggets) {
// //    console.log('Done!');
// // } else {
// //     console.log('Мы уходим');
// // }

// // for (let i = 5; i < 11; i++) {
// //     console.log(i);
// // }

// // for (let i = 20; i > 13; --i) {
// //     if(i === 12)
// //     break;
// //     console.log(i);
// // }

// // for (let i = 1; i < 11; i++) {
// //     if (i % 2 === 0)
// //     console.log(i); 
// // }
// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// // let i = 2;
// // while (i <= 16) {
// //     if (i % 2 === 0) {
// //         i++;
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// //     i++;
// // }

//     // const arrayOfNumbers = [];
//     // for (let i = 5; i <= 10; i++) {
//     // arrayOfNumbers[i - 5] = i;
//     // }
//     // console.log(arrayOfNumbers);
//     // return arrayOfNumbers;

//     // const arr = [3, 5, 8, 16, 20, 23, 50];
//     // const result = [];

//     // for(let i = 0; i < arr.length; i++) {
//     //     result[i] = arr[i];
//     // }
    
//     // console.log(result);
//     // return result;

// //     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
// //     for (let i = 0; i < data.length; i++) {
// //         if (typeof(data[i]) === 'number') {
// //             data[i] = data[i] * 2;
// //         } else if (typeof(data[i]) === 'string') {
// //             data[i] = `${data[i]} - done`;
// //         }

// //    } 
   
// //    console.log(data);
// //    return data;

//     // const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // const result = [];

//     // for(let i = 1; i <= data.length; i++) {
//     //     result[i - 1] = data[data.length - i]
//     // }

//     // console.log(result);
//     // return result;

// //     const lines = 5;
// //     let result = '';

// //     for (let i = 0; i <= lines; i++) {
// //         for (let j = 0; j < lines - i; j++) {
// //             result += " ";
// //         }
// //         for (let j = 0; j < 2 * i + 1; j++){
// //             result += "*";
// //         }
// //         result += '\n';
// //     }
// //     console.log(result);

      
// //     const lines = 6;
// //     let result = '';
    
// //     for(let i = 1; i <= lines + 1; i++) {

// //     for (let j = i; j <= lines; j++) {
// //         result += ' ';
// //         }

// //     let qtyStars = i * 2 - 1;   

// //     for(let k = 1; k <= qtyStars; k++) {
// //         result += '*';   
// //         }
// //     result += '\n';
// // }
// // console.log(result);





// // function sayHello(name) {
// //     return `Привет, ${name}!`;
// //     }
// //     sayHello('Антон');

// // function returnNeighboringNumbers(num) {
// //     return [num - 1, num, num + 1];
// //     }
// //     returnNeighboringNumbers(5);

// // function getMethResult(num, times) {
// //     if (typeof(times) !== 'number' || times <= 0) {
// //         return num;
// //     }

// //     let str = '';

// //     for (let i = 1; i <= times; i++) {
// //         if (i === times) {
// //             str += `${num * i}`;
// //             // Тут без черточек в конце
// //         } else {
// //             str += `${num * i}---`;
// //             // Это тоже самое, что и
// //             // str = str + num * i + "---"
// //         }
// //         console.log(str);
// //     }
// //     return str;
// // }

// // getMethResult(10,5);
    

// // const usdCurr = 28;
// // const eurCurr = 32;
// // const rusCurr = 18; 

// // function convert(amount, curr,) {
// //     console.log(curr * amount);
// // }
// // convert(500, usdCurr);
// // convert(500, eurCurr);
// // convert(500, rusCurr);






// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }
//     console.log(result);
//     return result;
// }

// fib(1)


//     const options = {
//         firstName: 'van9',
//         secondName: 'vasili4',
//         country: 'Polsha',
//         children: {
//             firstChild: 'nina',
//             secondChild: 'vit9',
//             thirdChild: 'ol9'
//         }
//     };
// console.log(Object.keys(options).length);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
    // showAgeAndLangs: function(plan) {
    //     const {age} = plan;
    //     const {languages} = plan.skills;
    //     let str = `Мне ${age} и я владею языками: `;
        
    //     languages.forEach(function(lang) {
    //         str += `${lang.toUpperCase()} `;
    //     });
    //     console.log(str);

    //     return str;
    // }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
// console.log(str);
//     return str;
// }

// showProgrammingLangs(personalPlanPeter);


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
    
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });
// console.log(str);
//     return str;
// }

// showFamily(family);

// const someString = 'This is some strange string';

// function reverse(str) {
//  let newStr = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     console.log(newStr);
//     return newStr
// }
// reverse(someString);




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFimlms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы класический зритель');
         } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
         } else {
            console.log('Произошла ошибка');
         }
     },
     showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
     },
     toggleVisibolMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
     },
     writeYourGeneres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();
            if (genre === '' || genre == null || genre >= 0) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres.sort();
            }  
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
