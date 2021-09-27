// ----------------HOME

import React from "react";
import CharacterItem from "../../components/CharacterItem";
import style from "./styles.module.css";

function Home() {
  return (
    <div>
      <h1 className={style.title}>meu site com react!!!</h1>
      <CharacterItem name="rick" />
    </div>
  );
}

export default Home;
