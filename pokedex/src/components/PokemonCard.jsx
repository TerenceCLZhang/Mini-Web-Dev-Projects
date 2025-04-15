import "../css/PokemonCard.css";

function PokemonCard({ id, name, type, image, color }) {
  return (
    <div className="pokemon-card" style={{ backgroundColor: color }}>
      <div className="sprite">
        <img src={image} alt={name} />
      </div>
      <span className="id">#{(() => id.toString().padStart(3, "0"))()}</span>
      <span className="name">{name}</span>
      <span className="type">Type: {type}</span>
    </div>
  );
}

export default PokemonCard;
