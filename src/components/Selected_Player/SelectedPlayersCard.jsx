import React from 'react';

const SelectedPlayerCard = ({player,removePlayer}) => {
    const handleRemove=()=>{
     removePlayer(player)
    }
    return (
        <div className='flex justify-between items-center bg-white my-5 p-3 shadow-sm rounded-lg'>
           <div className='flex items-center gap-5'>
            <div>
            <img className='rounded-lg w-[200px] h-[150px]' src={player.image} alt={player.name} />
            </div> 
            <div>
                <h2 className='font-bold'>{player.name}</h2>
                <p className='text-gray-400'>{player.role}</p>
            </div>
           </div>
           <div onClick={handleRemove} className='text-red-400 cursor-pointer'>
            <i className="fa-solid fa-trash"></i>
           </div>
        </div>
    );
};

export default SelectedPlayerCard;