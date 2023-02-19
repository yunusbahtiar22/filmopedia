import { useQuery } from "@tanstack/react-query";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: any;
  id: number;
  orginal_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

const BASE_URL = "https://api.themoviedb.org/3";

const getPlaying = async (): Promise<Movie[]> => {
  try {
    const raw = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }`
    );
    const response = await raw.json();
    return response.results;
  } catch (err) {
    throw err;
  }
};

export const usePlayingQuery = () => {
  return useQuery({
    queryKey: ["playing"],
    queryFn: getPlaying,
  });
};
