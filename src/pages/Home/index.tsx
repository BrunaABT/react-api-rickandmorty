// ----------------HOME

import api from "../../services/api";
import React from "react";

import CharacterItem from "../../components/CharacterItem";
import style from "./styles.module.css";
import logo from "../../assets/images/logo.png";

function Home() {
  const getAllItems = async () => {
    const items = await api.get("/character");
    return items;
  };

  return (
    <div>
      <img
        onClick={() => getAllItems()}
        className={style.logo}
        src={logo}
        alt=""
      />
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
