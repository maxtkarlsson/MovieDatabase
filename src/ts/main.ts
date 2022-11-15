import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieServices";

(document.getElementById("searchForm") as HTMLInputElement).addEventListener(
  "input",
  async (/*e: SubmitEvent*/) => {
    //e.preventDefault();

    let searchText: string = (
      document.getElementById("searchText") as HTMLInputElement
    ).value;
    try {
      let movies: IMovie[] = await searchMovies(searchText);
      if (searchText.length > 2) {
        createHTML(movies);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

function createHTML(movies: IMovie[]) {
  let container: HTMLDivElement = document.getElementById(
    "maincontainer"
  ) as HTMLDivElement;
  container.innerHTML = "";

  for (let i = 0; i < movies.length; i++) {
    let moviecard: HTMLDivElement = document.createElement("div");
    let movietitle: HTMLHeadingElement = document.createElement("h3");
    let movieposter: HTMLImageElement = document.createElement("img");

    let maincontainer: HTMLDivElement = document.getElementById(
      "maincontainer"
    ) as HTMLDivElement;

    movietitle.innerText = movies[i].Title;
    movieposter.src = movies[i].Poster;

    moviecard.classList.add("card");
    movietitle.classList.add("card__title");
    movieposter.classList.add("card__image");
    maincontainer.classList.add("maincontainer");

    moviecard.appendChild(movietitle);
    moviecard.appendChild(movieposter);
    maincontainer.appendChild(moviecard);
  }
}

//GAMMAL KOD NEDAN
/*
// Request from OMDBAPI
function search() {
  searchTerm = textInput.value;
  axios
    .get<IOmdbResponse>(
      "http://www.omdbapi.com/?apikey=9c3a7944&s=" + searchTerm
    )
    .then((response) => {
      let movies: IMovie[] = response.data.Search;

      console.log(response.data);
      handleData(movies);

      /*
      if ((response.data.Response = "True")) {
        handleData(movies);
      }
    });
}


function handleData(movies: IMovie[]): void {
  for (let i = 0; i < movies.length; i++) {
    let moviecard: HTMLDivElement = document.createElement("div");
    let movietitle: HTMLHeadingElement = document.createElement("h3");
    let movieposter: HTMLImageElement = document.createElement("img");
    let maincontainer: HTMLDivElement = document.getElementById(
      "maincontainer"
    ) as HTMLDivElement;

    movietitle.innerText = movies[i].Title;
    movieposter.src = movies[i].Poster;

    moviecard.classList.add("card");
    movietitle.classList.add("card__title");
    movieposter.classList.add("card__image");
    maincontainer.classList.add("maincontainer");

    moviecard.appendChild(movietitle);
    moviecard.appendChild(movieposter);
    maincontainer.appendChild(moviecard);
  }
}

let searchButton: HTMLButtonElement = document.getElementById(
  "searchBtn"
) as HTMLButtonElement;

let textInput: HTMLInputElement = document.getElementById(
  "textInput"
) as HTMLInputElement;

searchButton.addEventListener("click", search);

let searchTerm: string;

/*
Old axioes:
axios
  .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=9c3a7944&s=Star")
  .then((response) => {
    let movies: IMovie[] = response.data.Search;
    console.log(movies);

    handleData(movies);
  });

*/
