import React from 'react';

const PlayerCard = ({player}) => {
    return (
        <div className="card bg-base-100  shadow-sm">
        <figure className="p-5">
          <img
            src={player.image}
            alt={player.name} className="rounded-lg w-[480px] h-[250px]  object-cover"
          />
        </figure>
        <div className="card-body">
            <div className="flex items-center gap-1 ">
                <div><i className="fa-solid fa-user text-xl"></i></div>
                 <h2 className="card-title">{player.name}</h2>
            </div>
            <div className="flex justify-between">
                <div className="flex items-center gap-1">
                    <div><i className="fa-solid fa-flag text-xl"></i></div>
                    <h2 className="card-title text-gray-400">{player.nationality}</h2>
                </div>
                <div>
                    <button className="btn">{player.role}</button>
                </div>
            </div>
            <hr className="text-gray-200 my-2"/>
           <h2 className="font-bold">Rating: {player.rating}</h2>
         <div className="flex justify-between">
            <h2 className="font-bold">{player.battingStyle}</h2>
             <h2 className="font-bold text-gray-400">{player.bowlingStyle}</h2>
         </div>
         <div className="flex justify-between items-center">
             <h2 className="font-bold">Price:$ {player.price}</h2>
         <div className="card-actions">
           <button className="btn">Choose Player</button>
          </div>
         </div>
          
        </div>
      </div>
    );
};

export default PlayerCard;