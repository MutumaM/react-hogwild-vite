import { useState } from "react";

function HogCard({ hog, toggleHide }) {
  const [showDetails, setShowDetails] = useState(false);

  if (hog.hidden) return null;

  return (
    <div
      aria-label="hog card"
      className="ui eight wide column card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="image">
        <img src={hog.image} alt={`Photo of ${hog.name}`} />
      </div>

      <div className="content">
        <h3>{hog.name}</h3>

        {showDetails && (
          <div>
            <p>Specialty: {hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased ? "Greased" : "Nongreased"}</p>
            <p>{hog["highest medal achieved"]}</p>
          </div>
        )}

        <button
          className="ui red button"
          onClick={(e) => {
            e.stopPropagation();
            toggleHide(hog.name);
          }}
        >
          Hide Me
        </button>
      </div>
    </div>
  );
}

export default HogCard;