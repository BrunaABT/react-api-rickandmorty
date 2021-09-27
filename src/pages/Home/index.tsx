// ----------------HOME

import React from "react";
import api from "../../services/api";
import { useState } from "react";

import CharacterItem from "../../components/CharacterItem";
import style from "./styles.module.css";
import logo from "../../assets/images/logo.png";

function Home() {
  const [items, setItems] = useState(null);

  const getAllItems = async () => {
    const { data } = await api.get("/character");
    setItems(data.results);
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
