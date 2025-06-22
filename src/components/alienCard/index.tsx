import "tachyons";

import { Alien } from "../../types";

const AlienCard = ({ name, userName, email }: Alien) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt={`${userName} profile pic`}
        src={`https://robohash.org/${name}?size=200x200&set=set2`}
      />
      <div>
        <p>{userName}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default AlienCard;
