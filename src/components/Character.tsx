import React from "react";

import classes from "./Character.module.css";
interface CharacterProps {
  character: {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
  };
}

const Character = ({ character }: CharacterProps) => {
  return (
    <div className={classes.characterCard}>
      <div className={classes.imgContainer}>
        <img className={classes.img} src={character.image} alt="" />
      </div>
      <div className={classes.characterInfo}>
        <p className={classes.text}>Name: {character.name}</p>
        <p className={classes.text}>Status: {character.status}</p>
        <p className={classes.text}>Species: {character.species}</p>
        <p className={classes.text}>Gender: {character.gender}</p>
        <p className={classes.text}>Type: {character.type}</p>
      </div>
    </div>
  );
};

export default Character;
