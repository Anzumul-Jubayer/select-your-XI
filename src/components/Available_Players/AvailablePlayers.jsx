import React from "react";
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({ playerPromise,setavailableBalance,availableBalance }) => {
  const playerData = use(playerPromise);
  
  return (
     <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-5  mt-10 lg:mt-20 px-2 lg:px-0">

    {
        playerData.map(player=><PlayerCard availableBalance={availableBalance} setavailableBalance={setavailableBalance} key={player.id}  player={player}></PlayerCard>)
    }
      
    </div>
  );
};

export default AvailablePlayers;
