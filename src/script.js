const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "ac017f7bf23ec951f66ecee062fbb4d9";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const $main = document.getElementById("main");
let $movies = document.querySelector(".movie");
let $form = document.querySelector("#form");
let test = document.querySelector("#searche");
let $button = document.querySelector("#btn");
let $btn = document.querySelector("#btn_2");
let $btnA = document.querySelector("#btn_3");
let $btnB = document.querySelector("#btn_4");
let $btnC = document.querySelector("#btn_5");

const next = document.getElementById("next");
const current = document.getElementById("current");
const tagsEl = document.getElementById("tags");
let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuClose = document.querySelector(".close");

//code a modifier

const typeFlm = [
  { id: 28, name: "Action 🤠" },
  {
    id: 12,
    name: "Aventure 😆",
  },
  {
    id: 16,
    name: "Animation 🐻",
  },
  {
    id: 35,
    name: "Comédie 😂",
  },
  {
    id: 80,
    name: "Crime 🔪🩸",
  },
  {
    id: 99,
    name: "Documentaire 🤓",
  },
  {
    id: 18,
    name: "Drama 🥺",
  },
  {
    id: 10751,
    name: "Famille 👨‍👩‍👦‍👦",
  },
  {
    id: 14,
    name: "Fantaisie 🤯",
  },
  {
    id: 36,
    name: "Histoire 🏰",
  },
  {
    id: 27,
    name: "Horreur 👹",
  },
  {
    id: 10402,
    name: "Musique 🎶",
  },
  {
    id: 9648,
    name: "Mystère 😶",
  },
  {
    id: 10749,
    name: "Romance 😭",
  },
  {
    id: 878,
    name: "La science-fiction 🤖",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Polar",
  },
  {
    id: 10752,
    name: "Guerre ⚔️",
  },
  {
    id: 37,
    name: "Occidentale ",
  },
];

setGenre();
function setGenre() {
  tagsEl.innerHTML = "";
  typeFlm.forEach((genre) => {
    const creatButton = document.createElement("div");
    creatButton.classList.add("tag");
    creatButton.id = genre.id;
    creatButton.innerText = genre.name;

    tagsEl.append(creatButton);
  });
}
/*prev.addEventListener("click", () => {
  if (prevPage > 0) {
    pageCall(prevPage);
  }
});

next.addEventListener("click", () => {
  if (nextPage <= totalPages) {
    pageCall(nextPage);
  }
});*/


//code fini
 getBestMovie()
function getMovie(value) {
  fetch(`${API_URL}/search/multi?api_key=${API_KEY}&query=${test.value}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(test.value);
      creatMovies(data);
    });
}
function getVintageMovie(m) {
  fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=release_date.asc&append_to_response=tv`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(test.value);
      creatMovies(data);
    });
}
function creatMovies(data) {
  $main.innerHTML = "";
  let $data = data.results;
  for (let i = 0; i < $data.length; i++) {
    console.log($data[i]);

    let moviesEl = document.createElement("div");
    moviesEl.classList.add("movie");
    if ($data[i].poster_path) {
      moviesEl.innerHTML = `
      <img src="${IMAGE_URL + $data[i].poster_path}" alt="${$data[i].title}">
            
      <div class="movie-info">
          <h3>${$data[i].title}</h3>
          <span class="${color_note( $data[i].vote_average)}">${
        $data[i].vote_average
      }</span>
      </div>
      <div class="overview">
          <h3>
          ${$data[i].overview}
          </h3>
      </div>
  `;
      $main.appendChild(moviesEl);
    }
  }
}
function color_note(color) {
  console.log(color)
  if (color >= 8) {
    console.log("green");
    return "green";
  } else if (color >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
function getBestMovie(rondow) {
  fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}
function getWorstMovie(rondow) {
  fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.asc`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}
function getQueeckerMovie(rondow) {
  fetch(`${API_URL}/discover/movie?api_key=${API_KEY}
&with_runtime.lte=90&region=US`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}
function getLongerMovie(rondow) {
  fetch(`${API_URL}/discover/movie?api_key=${API_KEY}
&with_runtime.gte=300&region=US`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}
function getPoorMovie(rondow) {
  fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=revenue.asc`
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}
function getUstMovie(rondow) {
  fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=revenue.asc`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      creatMovies(data);
    });
}

$form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("click");
  getMovie(test.value);
  test.value="";

});
$button.addEventListener("click", function () {
  console.log("click");
  getWorstMovie();
});
$btn.addEventListener("click", function () {
  console.log("click moin fort fdp");
  getVintageMovie();
});
$btnA.addEventListener("click", function () {
  console.log("click moin fort fdp");
  getQueeckerMovie();
});
$btnB.addEventListener("click", function () {
  console.log("click moin fort fdp");
  getLongerMovie();
});
$btnC.addEventListener("click", function () {
  console.log("click moin fort fdp");
  getPoorMovie();
});
menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.add("is-open");
});
menuClose.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.remove("is-open");
});
