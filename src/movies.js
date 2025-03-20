// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

function getAllDirectorsUnique(moviesArray) {
  const allDirectors = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = [...new Set(allDirectors)];
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((acc, movie) => {
    // Some movies might not have a score
    return acc + (movie.score || 0);
  }, 0);

  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2)); // Round to 2 decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Filter only Drama movies
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  // If no drama movies, return 0
  if (dramaMovies.length === 0) return 0;

  // Calculate the average score of drama movies
  const totalDramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const averageDramaScore = totalDramaScore / dramaMovies.length;
  return Number(averageDramaScore.toFixed(2)); // Round to 2 decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Clone the original array to avoid mutation
  const moviesCopy = [...moviesArray];

  // Sort the copied array
  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year
    } else {
      return a.title.localeCompare(b.title); // If same year, sort by title
    }
  });

  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Clone the array to avoid mutation
  const moviesCopy = [...moviesArray];

  // Sort the copy alphabetically by title
  const sortedMovies = moviesCopy.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Map to get only the titles
  const titles = sortedMovies.map((movie) => movie.title);

  // Return the first 20 titles or all if less than 20
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    // Clone the movie to avoid mutating the original object
    const movieCopy = { ...movie };

    // Extract the duration string
    const durationStr = movie.duration;
    let totalMinutes = 0;

    // Use regex to find hours and minutes
    const hoursMatch = durationStr.match(/(\d+)h/);
    const minutesMatch = durationStr.match(/(\d+)min/);

    // Convert hours to minutes if present
    if (hoursMatch) {
      totalMinutes += parseInt(hoursMatch[1]) * 60;
    }

    // Add the remaining minutes if present
    if (minutesMatch) {
      totalMinutes += parseInt(minutesMatch[1]);
    }

    // Replace duration with total minutes
    movieCopy.duration = totalMinutes;

    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const yearScores = {};

  moviesArray.forEach((movie) => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = [movie.score];
    } else {
      yearScores[movie.year].push(movie.score);
    }
  });

  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearScores) {
    const scores = yearScores[year];
    const avg = scores.reduce((acc, score) => acc + score, 0) / scores.length;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(
    1
  )}`;
}
