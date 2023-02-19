import { usePlayingQuery, type Movie } from "../utils/api";
import Layout from "../components/layout";
import MovieCard from "../components/movie-card";

export default function Home(): JSX.Element {
  const { data } = usePlayingQuery();
  return (
    <>
      <Layout>
        <div className="row g-3">
          {data?.map((movie: Movie) => {
            return (
              <div className="col-md-3" key={movie.id}>
                <MovieCard content={movie} />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
}
