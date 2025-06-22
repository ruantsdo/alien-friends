import { Alien } from "../../types";
import AlienCard from "../alienCard";

interface CardListProps {
  filteredAliens: Alien[];
}

const CardList = ({ filteredAliens }: CardListProps) => {
  return (
    <div>
      {filteredAliens.map((alien) => (
        <AlienCard
          key={alien.id}
          id={alien.id}
          name={alien.name}
          userName={alien.userName}
          email={alien.email}
        />
      ))}
    </div>
  );
};

export default CardList;
