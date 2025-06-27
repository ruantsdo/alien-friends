// Types
import { AlienData } from "../../types";
// Components
import { AlienCard } from "../";

interface CardListProps {
  filteredAliens: AlienData[];
}

const CardList = ({ filteredAliens }: CardListProps) => {
  return (
    <div>
      {filteredAliens.map((alien) => (
        <AlienCard
          key={alien.login.uuid}
          name={alien.name}
          email={alien.email}
        />
      ))}
    </div>
  );
};

export default CardList;
