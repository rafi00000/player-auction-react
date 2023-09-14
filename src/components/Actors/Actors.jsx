import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";

const Actors = ({handleCart}) => {
  const [allActors, setAllActors] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => setAllActors(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center">
        {
        allActors.map((actor) => (
          <Actor key={actor.id} actor={actor} handleCart={handleCart}></Actor>
        ))}
      </div>
    </>
  );
};

export default Actors;
