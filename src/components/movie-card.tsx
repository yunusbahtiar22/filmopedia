import { type Movie } from "../utils/api";

type MovieCardProps = {
  content: Movie;
};

const MovieCard = ({ content }: MovieCardProps): JSX.Element => {
  const TMDB_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="card">
      <img
        src={`${TMDB_URL}${content.backdrop_path}`}
        className="card-img-top"
        alt={content.title}
      />
      <div className="card-body">
        <div className="mb-3" style={{ height: 40 }}>
          <h5 className="card-title">{content.title}</h5>
        </div>
        <div className="my-2" style={{ height: 100, overflow: "hidden" }}>
          <p className="card-text">{content.overview}</p>
        </div>
        <button className="btn btn-primary">See details &#8594;</button>
      </div>
    </div>
  );
};

export default MovieCard;
