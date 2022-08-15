import { Pagination, TextField } from "@mui/material";
import axios from "axios";
import Character from "components/Character";
import { Icharacter } from "modules/modules";
import React, { useEffect, useState } from "react";

import vk from "static/vk.png";

import classes from "./App.module.css";

function App() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [query, setQuery] = useState("");
  const fetchCharacter = async () => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${currentPage}`
    );
    console.log(response.data);
    setState(response.data.results);
    setPageCount(response.data.info.pages);
  };
  useEffect(() => {
    setLoading(true);
    fetchCharacter();
    setLoading(false);
  }, [currentPage, query]);
  return (
    <div className={classes.page}>
      <header className={classes.header}>
        <div className={classes.container}>
          <h1 className={classes.logo}>Rick And Morty Api</h1>
        </div>
      </header>
      {loading && <h2 className={classes.loading}>Loading...</h2>}
      <div className={classes.pagination}>
        <Pagination
          page={currentPage}
          count={pageCount}
          onChange={(_, num) => {
            setCurrentPage(num);
          }}
        />
      </div>
      <main className={classes.main}>
        <div className={classes.container}>
          <div className={classes.grid}>
            {state.map((char: Icharacter) => (
              <Character key={char.id} character={char} />
            ))}
          </div>
          <div className={classes.pagination}>
            <Pagination
              page={currentPage}
              count={pageCount}
              onChange={(_, num) => {
                setCurrentPage(num);
              }}
            />
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
