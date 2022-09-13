import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  selectCharacters,
  selectError,
  selectHasNextPage,
  selectPage,
  selectStatus,
} from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import Character from "../../components/Character";
import "./styles.css";

function Home() {
  const dispatch = useDispatch();
  const characters = useSelector(selectCharacters);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const page = useSelector(selectPage);
  const hasNextPage = useSelector(selectHasNextPage);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <main>
      <h1>Characters</h1>
      <Masonry
        breakpointCols={{ default: 4, 1024: 3, 900: 2, 585: 1 }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((data) => (
          <Character key={data.char_id} character={data} />
        ))}
      </Masonry>
      {status === "loading" && <Loading />}
      {hasNextPage && status !== "loading" && (
        <button onClick={() => dispatch(fetchCharacters(page))}>
          Load More
        </button>
      )}
      {!hasNextPage && (
        <div>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Back To Top
          </button>
        </div>
      )}
    </main>
  );
}
export default Home;
