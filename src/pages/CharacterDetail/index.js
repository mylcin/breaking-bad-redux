import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import styles from "./styles.module.css";

function CharacterDetail() {
  const { char_id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setCharacter(data[0]))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [char_id]);

  return (
    <main className={styles.container}>
      <h1>Character Details</h1>
      {loading && <Loading />}
      {character && (
        <div className={styles.characterContainer}>
          <img src={character.img} alt={character.name} />
          <div className={styles.characterInfo}>
            <h3>Name:</h3>
            <p>{character.name}</p>
            <h3>Nickname:</h3>
            <p>{character.nickname}</p>
            <h3>Birthday:</h3>
            <p>{character.birthday}</p>
            <h3>Occupation:</h3>
            <ul>
              {character.occupation.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
            <h3>Appearance:</h3>
            <p>Season: {character.appearance.join(" / ")}</p>
            <h3>Portrayed by:</h3>
            <p>{character.portrayed}</p>
            <h3>Status:</h3>
            <p>{character.status}</p>
          </div>
        </div>
      )}
      <hr />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </main>
  );
}

export default CharacterDetail;
