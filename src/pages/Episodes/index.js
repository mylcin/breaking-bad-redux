import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  episodesSelector,
  errorSelector,
  fetchEpisodes,
  statusSelector,
} from "../../redux/episodesSlice";
import Masonry from "react-masonry-css";
import Episode from "../../components/Episode";
import "./styles.css";

function Episodes() {
  const dispatch = useDispatch();
  const episodes = useSelector(episodesSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchEpisodes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error />;
  }
  return (
    <main>
      <h1>Episodes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" && (
        <Masonry
          breakpointCols={{ default: 4, 1024: 3, 900: 2, 585: 1 }}
          className="my-masonry-grid2"
          columnClassName="my-masonry-grid_column2"
        >
          {episodes.map((data) => (
            <Episode key={data.episode_id} data={data} />
          ))}
        </Masonry>
      )}
    </main>
  );
}

export default Episodes;
