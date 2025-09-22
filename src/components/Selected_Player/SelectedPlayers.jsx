import React from 'react';
import SelectedPlayerCard from './SelectedPlayersCard';
const SelectedPlayers = ({purchasedPlayer,removePlayer}) => {
    
    return (
        <div className='max-w-[1500px] mx-auto'>
          {
            purchasedPlayer.map(player=><SelectedPlayerCard key={player.id} removePlayer={removePlayer} player={player}></SelectedPlayerCard>)
          }
        </div>
    );
};

export default SelectedPlayers;

