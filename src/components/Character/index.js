import { Link } from "react-router-dom";

function Character({ character }) {
  return (
    <div>
      <Link to={`/character/${character.char_id}`}>
        <img src={character.img} alt={character.name} className="character" />
        <div className="characterName">{character.name}</div>
      </Link>
    </div>
  );
}

export default Character;
