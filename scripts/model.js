import { async } from "regenerator-runtime";

import {
  DISCOVER_API_URL,
  POPULAR_MOVIES_API_URL,
  TRENDING_API_URL,
  POPULAR_TVS_API_URL,
} from "./config";

export const data = {
  movie: {},
  discoverMovies: [],
  popularMovies: [],
  trendingMovies: [],
  popularTVS: [],
};

console.log(data["discoverMovies"]);

export const createDiscoverCards = async function (pageName) {
  try {
    let movieData;
    let obj;
    if (pageName === "home") {
      movieData = await fetch(DISCOVER_API_URL);
      obj = "discoverMovies";
    }
    if (pageName === "movies-pop") {
      movieData = await fetch(POPULAR_MOVIES_API_URL);
      obj = "popularMovies";
    }
    if (pageName === "trending") {
      movieData = await fetch(TRENDING_API_URL);
      obj = "trendingMovies";
    }
    if (pageName === "tvs-pop") {
      movieData = await fetch(POPULAR_TVS_API_URL);
      obj = "popularTVS";
    }

    const res = await movieData.json();
    console.log(res);

    if (!movieData.ok) throw new Error();
    // Returns when the response fails
    data[obj] = res.results.map((data) => {
      return {
        title: data.title || data.name,
        img: data.poster_path,
      };
    });
  } catch (error) {
    console.error(error);
  }
};