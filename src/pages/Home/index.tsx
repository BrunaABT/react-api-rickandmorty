// ----------------HOME

import React from "react";
import CharacterItem from "../../components/CharacterItem";
import style from "./styles.module.css";
import logo from "../../assets/images/logo.png";

function Home() {
  return (
    <div>
      <img className={style.logo} src={logo} alt="" />
      <h1 className={style.title}>Characters from Rick and Morty</h1>
      <CharacterItem name="rick" />
      <CharacterItem name="rick" />
      <CharacterItem name="rick" />
      <CharacterItem name="rick" />
      <CharacterItem name="rick" />
    </div>
  );
}

export default Home;
