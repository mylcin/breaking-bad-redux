import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  fetchRandomQuote,
  randomQuoteSelector,
  statusSelector,
} from "../../redux/quoteSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import styles from "./styles.module.css";

function RandomQuote() {
  const dispatch = useDispatch();
  const randomQuote = useSelector(randomQuoteSelector);
  const status = useSelector(statusSelector);
  const error = useSelector(errorSelector);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRandomQuote());
    }
  }, [status, dispatch]);

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <h1>Quotes</h1>
      {status === "loading" && <Loading />}
      {status === "succeeded" && (
        <div className={styles.randomQuoteContainer}>
          <div className={styles.randomQuoteInfo}>
            <q>{randomQuote.quote}</q>
            <strong>- {randomQuote.author}</strong>
          </div>
        </div>
      )}
      <br />
      <hr />
      <button onClick={() => dispatch(fetchRandomQuote())}>Random Quote</button>
    </div>
  );
}

export default RandomQuote;
