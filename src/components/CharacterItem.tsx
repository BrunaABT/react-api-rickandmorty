interface IProps {
  name: string;
}

const CharacterItem: React.FC<IProps> = ({ name }) => {
  return <div>{name || "sem nome"}</div>;
};

export default CharacterItem;
