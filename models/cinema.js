const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(film => film.title)
};

Cinema.prototype.findFilmByTitle = function (filmTitle) {
  // return this.films.filter((film) => {
  //   return film.title === filmTitle;
  // })
  return this.films.find((film) => {
    return film.title === filmTitle;
  })
};

// .find will return result from array, not array(like filter)

Cinema.prototype.findFilmByGenre = function (filmGenre) {
  const result = this.films.filter((film) => {
    return film.genre === filmGenre;
  })
  return result;
}

Cinema.prototype.filmExistsByYear = function (filmYear) {
  return this.films.some((film) => {
    return film.year === filmYear;
  });
}

Cinema.prototype.filmLength = function (filmLength) {
  return this.films.every ((film) => {
    return film.length > filmLength;
  });
}

Cinema.prototype.filmsTotalLength = function (){
  return this.films.reduce ((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0 );
}

Cinema.prototype.filmsByProperty = function (name, value) {
  return this.films.filter((film) => {
    return film[name] === value;
  });
}

module.exports = Cinema;
