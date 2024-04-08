import { useQuery, QueryObserverResult, useMutation } from "@tanstack/react-query";
import type { PopularData, Popular, apiResponse, PopularPeople, people } from "../types";
import { GetPopular, TopRate, NowPlaying, searchMovie, GetDetailMovie, GetImageslMovie, GetReviewsMovie, GetGenresMovie, GetUnComingMovie, GetPeople } from "../Api";
import { AxiosError, AxiosResponse } from "axios";


const useGetPopular = () => {
  return useQuery({
    queryKey: ['PopularData'],
    queryFn: GetPopular,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let popular = data?.data?.results;
      return popular
    }
  }

  );
};


const useTopRate = () => {
  return useQuery({
    queryKey: ['topRate'],
    queryFn: TopRate,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let TopRate = data?.data?.results;
      return TopRate
    }
  })
}

const useNowPlay = () => {
  return useQuery({
    queryKey: ["nowPlay"],
    queryFn: NowPlaying,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let NowPlaying = data?.data?.results;
      return NowPlaying
    }
  })
}

const useSearch = () => {
  return useMutation<AxiosResponse<PopularData>, Error, any, string[]>({
    mutationFn: searchMovie,
    onError: (error) => {
      console.log(error);

    },
    onSuccess: (data) => {
      console.log(data);

    }
  })
}

const useMovieDetail = (id: any) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: GetDetailMovie,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let movie = data?.data;
      return movie
    }
  })
}

const useMovieImages = (id: any) => {
  return useQuery({
    queryKey: ["movieImages", id],
    queryFn: GetImageslMovie,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let images = data?.data;
      return images
    }
  })
}
const useReviewsMovie = (id: any) => {
  return useQuery({
    queryKey: ["movieImages", id],
    queryFn: GetReviewsMovie,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let Reviews = data?.data;
      return Reviews
    }
  })
}
const useGenresMovie = () => {
  return useQuery({
    queryKey: ["GenresMovie"],
    queryFn: GetGenresMovie,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let Genres = data?.data?.genres;
      return Genres
    }
  })
}
const useUncominMovie = () => {
  return useQuery({
    queryKey: ["unComingMovie"],
    queryFn: GetUnComingMovie,
    refetchOnWindowFocus: false,
    select: (data: any) => {
      let movie = data?.data?.results;
      return movie
    }
  })
}
const usePeople = () => {
  return useQuery({
    queryKey: ["people"],
    queryFn: GetPeople,
    refetchOnWindowFocus: false,
    select: (data:PopularPeople) => {
      let people = data.results;
      return people
    }
  })
}

export { useGetPopular, useTopRate, useNowPlay, useMovieDetail, useMovieImages, useReviewsMovie, useSearch, useGenresMovie, useUncominMovie,usePeople };
