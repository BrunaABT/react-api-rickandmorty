interface IProps {
  name: string;
}

function CharacterItem({ name }: IProps) {
  return <div>{name || "sem nome"}</div>;
}

export default CharacterItem;
