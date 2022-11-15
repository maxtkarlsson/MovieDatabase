import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmbdResponse";
import axios from "axios";

export async function searchMovies(searchText: string): Promise<IMovie[]> {
  let response = await axios.get<IOmdbResponse>(
    `http://www.omdbapi.com/?apikey=9c3a7944&s=${searchText}`
  );

  if (response.data.Response === "False") {
    throw "Kan inte hitta";
  }

  return response.data.Search;
}
