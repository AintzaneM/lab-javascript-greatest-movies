

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArr) {
  const totalDirectors = movies.map(function(filmObj){
    return filmObj.director;
  });
  console.log(totalDirectors);
}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const result = movies.filter(function (film) {
    return film.director === 'Steven Spielberg' && film.genre.includes('Drama');
      
  });
  console.log(result.length);
}
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if(!movies.length){
    return 0;
  }
  const result = movies.map(function (film) {
    return film.score;
  });
  
  const sum = movies.reduce(function(acc, currentValue){
    return acc + currentValue;
  }, 0); 

  const average = sum / movies.length;

  console.log(average);
}



  

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const moviesDrama = movies.filter(function(film) {
    return film.genre.includes('Drama');
  });

  const sum = moviesDrama.reduce(function(acc,currentValue){
    return acc + currentValue;
  },0);

  const averageDrama = sum / movies.length;

  console.log(averageDrama);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
