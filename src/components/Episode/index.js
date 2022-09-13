import { Link } from "react-router-dom";

function Episode({ data }) {
  return (
    <div>
      <Link to={`/episodes/${data.episode_id}`}>
        <strong>Season {data.season}</strong>{" "}
        <span className="episodeNumber">Episode {data.episode}</span>
      </Link>
    </div>
  );
}

export default Episode;
