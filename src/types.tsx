
export  interface Popular {
  title: string,
  adult:boolean,
  backdrop_path:string,
  id: number,
  original_language: String,
  original_name:String,
  overview:string ,
  popularity: number,
  poster_path: string,
  first_air_date: String,
  name: string,
  vote_average: number,
  vote_count:number,
  genre_ids:number[],
  origin_country:string[],
  release_date?:string
}

export  interface PopularData{
  page:number,
  results:Popular[],
  total_pages:number,
  total_results:number
}


export interface apiResponse{
  config:any,
  data:PopularData,
  headers:any,
  request:any,
  status:number,
  statusText:String
}

export interface GenresInner{

    id: number,
    name: string

}
export interface people{
  adult:boolean,
  gender:number,
  known_for:Popular[],
  known_for_department:string,
  name:string,
  original_name:string,
  popularity:number,
  profile_path:string
}
export interface PopularPeople{
  page:number,
  results:people[],
  total_pages:string,
  total_results:string
}

