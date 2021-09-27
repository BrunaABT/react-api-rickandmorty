// ----------------CHARACTER ITEM

import style from "./styles.module.css";

interface IProps {
  name: string;
}

const CharacterItem: React.FC<IProps> = ({ name }) => {
  return <div className={style.title}>{name}</div>;
};

export default CharacterItem;
