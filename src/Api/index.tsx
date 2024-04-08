import axios, { AxiosResponse } from "axios";
import type { GenresInner, PopularData, PopularPeople } from "../types";
import { apiKey, baseUrl } from "../env";
import { promises } from "dns";


const GetPopular = async (): Promise<PopularData> => {
  return await axios.get(`${baseUrl}/3/tv/popular?language=en-US&page=1`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
};


const TopRate = async (): Promise<PopularData> => {
  return await axios.get(`${baseUrl}/3/movie/top_rated?language=en-US&page=1`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const NowPlaying = async (): Promise<PopularData> => {
  return await axios.get(`${baseUrl}/3/movie/now_playing?language=en-US&page=1`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const searchMovie= async (search:string) => {
  return await axios.get(`${baseUrl}/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}
interface SearchMovieContext {
  queryKey: string[];
  signal: AbortSignal;
  meta: Record<string, unknown> | undefined;
}

const GetDetailMovie = async (id:any): Promise<PopularData> => {
  const movie_id=id.queryKey[1];
console.log(movie_id);

  return await axios.get(`${baseUrl}/3/movie/${ movie_id}`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const GetImageslMovie = async (id:any): Promise<PopularData> => {
  const movie_id=id.queryKey[1];
  return await axios.get(`${baseUrl}/3/movie/${movie_id}/images`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const GetReviewsMovie = async (id:any): Promise<PopularData> => {
  const movie_id=id.queryKey[1];
  return await axios.get(`${baseUrl}/3/movie/${movie_id}/reviews`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const GetGenresMovie = async ():Promise<GenresInner> => {
  
  return await axios.get(`${baseUrl}/3/genre/movie/list`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const GetUnComingMovie = async ():Promise<PopularData> => {
  
  return await axios.get(`${baseUrl}/3/movie/upcoming`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}

const GetPerson = async () => {
  
  return await axios.get(`${baseUrl}/3/person/popular?page=1`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
}
const GetPeople = async ():Promise<PopularPeople> => {
  const result= await axios.get(`${baseUrl}/3/trending/person/day`, {
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "accept": "application/json",
    },
  });
  return result.data
}

export { GetPopular, TopRate ,NowPlaying ,searchMovie,GetDetailMovie,GetImageslMovie,GetReviewsMovie,GetGenresMovie,GetUnComingMovie,GetPerson,GetPeople};