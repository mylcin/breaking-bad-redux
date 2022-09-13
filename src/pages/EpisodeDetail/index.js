import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import styles from "./styles.module.css";

function EpisodeDetail() {
  const { episode_id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/episodes/${episode_id}`)
      .then((res) => res.data)
      .then((data) => setEpisode(data[0]))
      .finally(() => setLoading(false));
  }, [episode_id]);

  return (
    <main className={styles.container}>
      {loading && <Loading />}
      {episode && (
        <h1>
          Season {episode.season} Episode {episode.episode}
        </h1>
      )}
      {episode && (
        <div className={styles.episodeContainer}>
          <div className={styles.episodeInfo}>
            <h3>Title</h3>
            <p>{episode.title}</p>
            <h3>Original Air Date</h3>
            <p>{episode.air_date}</p>
            <h3>Characters</h3>
            <ul>
              {episode.characters.map((data, index) => (
                <li className={styles.episodeCharacter}key={index}>{data}</li>
              ))}
            </ul>
          </div>
          <hr />
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
      )}
    </main>
  );
}

export default EpisodeDetail;
