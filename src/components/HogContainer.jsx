import HogCard from "./HogCard";

function HogContainer({ hogs, toggleHide }) {
  return (
    <>
      {hogs.map(hog => (
        <HogCard
          key={hog.name}
          hog={hog}
          toggleHide={toggleHide}
        />
      ))}
    </>
  );
}

export default HogContainer;