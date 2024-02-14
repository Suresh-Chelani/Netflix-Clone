const apiKey = "a73e886cc6e80eb745399ce7d78da2f4";
const base = "https://api.themoviedb.org/3";
const bannerBaseUrl = "https://image.tmdb.org/t/p/original"; 
const apiUrl = `${base}/discover/tv?api_key=${apiKey}&with_network=213`;
const upcomingMoviesUrl = `${base}/movie/upcoming?api_key=${apiKey}`;
const trendingMoviesUrl = `${base}/trending/movie/week?api_key=${apiKey}`;
const top_ratedUrl = `${base}/movie/top_rated?api_key=${apiKey}`;
const trendingTVUrl = `${base}/trending/tv/week?api_key=${apiKey}`;
const on_the_airUrl = `${base}/tv/on_the_air?api_key=${apiKey}`;
const movieChangeURL = `${base}/tv/airing_today?api_key=${apiKey}`;

function nextPage() {
  window.location.href = "../index.html";
}

window.addEventListener("resize", function () {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 586) {
    var icons = document.getElementsByClassName("icon");
    for (var i = 0; i < icons.length; i++) {
      icons[i].src = "assets/netflix_PNG10.png";
    }
  } else {
    var icons = document.getElementsByClassName("icon");
    for (var i = 0; i < icons.length; i++) {
      icons[i].src = "assets/netflix-logo-drawing-png-19.png";
    }
  }
});

window.addEventListener("scroll", function () {
  var navL = document.getElementsByClassName("nav")[0];
  var item = document.getElementsByClassName("movie-item");
  if (window.scrollY > 0) {
    navL.style.backgroundColor = "black";
  } else {
    navL.style.backgroundColor = "";
  }
});

// Function to fetch popular movies
function trank(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "...." : str;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
  }
  return array;
}
fetch(apiUrl)
  .then((res) => res.json())
  .then((data) => {
    const results = shuffleArray(data.results);
    const randomMovie = results[Math.floor(Math.random() * results.length)];
    if (randomMovie.backdrop_path) {
      document.getElementById(
        "main"
      ).style.backgroundImage = `url(${bannerBaseUrl}${randomMovie.backdrop_path})`;
      document.getElementById("title").innerHTML = randomMovie.name;
      document.getElementById("dist").innerHTML = trank(
        randomMovie.overview,
        150
      );
    }
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });

fetch(upcomingMoviesUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);

    const movieContainer = document.getElementById("movie-container");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                       
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
fetch(top_ratedUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container2");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                       
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });

fetch(trendingTVUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container3");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.original_name}</h3>                       
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
fetch(trendingMoviesUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container1");
    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);

      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });

fetch(on_the_airUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    console.log(movies);
    const movieContainer = document.getElementById("movie-container4");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie?.original_name}</h3> 
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
fetch(upcomingMoviesUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);

    const movieContainer = document.getElementById("movie-container5");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                       
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
fetch(top_ratedUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container6");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                       
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });

fetch(trendingTVUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container7");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.original_name}</h3>                       
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
fetch(trendingMoviesUrl)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container8");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie.title}</h3>
                       
                        
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });

fetch(movieChangeURL)
  .then((res) => res.json())
  .then((data) => {
    const movies = shuffleArray(data.results);
    const movieContainer = document.getElementById("movie-container9");

    movies.forEach((movie) => {
      const movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      const butt = document.createElement("button");
      const img = document.createElement("img");
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      img.alt = movie.title;

      const description = document.createElement("div");
      description.classList.add("movie-description");
      description.innerHTML = `
                        <h3>${movie?.original_name}</h3> 
                    `;
      butt.innerHTML = "Play Now";
      description.append(butt);
      movieItem.appendChild(img);
      movieItem.appendChild(description);
      movieContainer.appendChild(movieItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching popular movies:", error);
  });
