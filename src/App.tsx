import axios from "axios";
import Character from "components/Character";
import React, { useEffect, useState } from "react";

import vk from "static/vk.png";

import classes from "./App.module.css";

function App() {
  const [state, setState] = useState([]);
  const fetchCharacter = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    setState(response.data.results);
  };
  useEffect(() => {
    fetchCharacter();
  }, []);
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <div className={classes.container}>
          <h1 className={classes.logo}>Rick And Morty Api</h1>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.grid}>
            {state.map((char) => (
              <Character character={char} />
            ))}
          </div>
        </div>
      </main>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.footer_flex}>
            <div className={classes.authorFlex}>
              <img className={classes.icon} src={vk} alt="vkIcon" />

              <a
                href={"https://vk.com/salutkishukekaterine"}
                className={classes.authorText}
              >
                Kirill smirnov
              </a>
            </div>
            <a
              className={classes.rickAndMoryLink}
              href="https://rickandmortyapi.com/"
            >
              RickAndMortyApi
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
