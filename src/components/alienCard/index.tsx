//Tachyons
import "tachyons";
// Types
import { AlienName } from "../../types";

interface Props {
  name: AlienName;
  email: string;
}

const AlienCard = ({ name, email }: Props) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt={`${name.first} profile pic`}
        src={`https://robohash.org/${
          name.first + name.last
        }?size=200x200&set=set2`}
      />
      <div>
        <p>{name.title + " " + name.first}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default AlienCard;
