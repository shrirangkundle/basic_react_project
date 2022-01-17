import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Birthday List </h1>
      <main>
        <section className="container">
          <h3>{people.length} Birthday today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])}>Clear all</button>
        </section>
      </main>
    </>
  );
}

export default App;
