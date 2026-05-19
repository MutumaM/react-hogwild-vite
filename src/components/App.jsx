import React, { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data";

import HogContainer from "./HogContainer";
import FilterSortBar from "./FilterSortBar";
import NewHogForm from "./NewHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");

  // hide hog (toggle hidden flag)
  const toggleHide = (name) => {
    setHogs(prev =>
      prev.map(h =>
        h.name === name ? { ...h, hidden: !h.hidden } : h
      )
    );
  };

  // add new hog
  const addHog = (newHog) => {
    setHogs(prev => [...prev, newHog]);
  };

  // apply filters
  const visibleHogs = hogs
    .filter(h => !h.hidden)
    .filter(h => (showGreasedOnly ? h.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">

      <Nav />

      <FilterSortBar
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        setSortBy={setSortBy}
      />

      <NewHogForm addHog={addHog} />

      <div className="ui grid container">
        <HogContainer hogs={visibleHogs} toggleHide={toggleHide} />
      </div>

    </div>
  );
}

export default App;