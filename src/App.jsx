import "./App.css";
import AvailablePlayers from "./components/Available_Players/AvailablePlayers";
import SelectedPlayers from "./components/Selected_Player/SelectedPlayers";
import Hero from "./components/Hero/Hero";
import { Suspense, useState } from "react";

  import { ToastContainer} from 'react-toastify';
// fetch data
const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
const playerPromise = fetchPlayers();
function App() {
  
  const [toggle, setToggle] = useState(true);
  const [availableBalance,setavailableBalance]=useState(6000000000)
  const [purchasedPlayer,setPurchasedPlayer]=useState([])
  
  const removePlayer=((player)=>{
    // console.log(p)
    const filteredData=purchasedPlayer.filter(ply=>ply.id!==player.id)
    setPurchasedPlayer(filteredData)
    const playerPrice=player.price
    setavailableBalance(availableBalance+playerPrice)
  })
  return (
    <>
      <Hero availableBalance={availableBalance} ></Hero>
      <div className="max-w-[1500px] mx-auto mt-20 flex justify-between items-center">
        <h1 className="font-bold text-3xl">{toggle===true?"Available Player":`Selected Player(${purchasedPlayer.length}/6)`}</h1>
        <div>
          <button onClick={()=>setToggle(true)} className={`font-semibold cursor-pointer border-1 border-r-0 border-gray-300 py-1 px-5 rounded-l-lg ${toggle===true?"bg-[#e7fe29]":""}`}>
            Available
          </button>
          <button onClick={()=>setToggle(false)} className={`font-semibold cursor-pointer border-1 border-r-0 border-gray-300 py-1 px-5 rounded-r-lg ${toggle===false?"bg-[#e7fe29]":""}`}>
            Selected <span>({purchasedPlayer.length})</span>
          </button>
        </div>
      </div>
      {/* players */}
      {toggle === true ? (
        <Suspense
          fallback={
            <h1 className="text-center my-30">
              <span className="loading loading-dots loading-xl"></span>
            </h1>
          }
        >
          <AvailablePlayers purchasedPlayer={purchasedPlayer} setPurchasedPlayer={setPurchasedPlayer}  availableBalance={availableBalance} setavailableBalance={setavailableBalance} playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      ) : (
      
          <SelectedPlayers removePlayer={removePlayer}  purchasedPlayer={purchasedPlayer} ></SelectedPlayers>
      
      )}
       <ToastContainer />
    </>
  );
}

export default App;
