import "./App.css";
import AvailablePlayers from "./components/Available_Players/AvailablePlayers";
import SelectedPlayers from "./components/Selected_Player/SelectedPlayers";
import Hero from "./components/Hero/Hero";
import { Suspense, useState } from "react";

// fetch data
const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};

function App() {
  const playerPromise = fetchPlayers();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <Hero></Hero>
      <div className="max-w-[1500px] mx-auto mt-20 flex justify-between items-center">
        <h1 className="font-bold text-3xl">Available Player</h1>
        <div>
          <button onClick={()=>setToggle(true)} className={`font-semibold cursor-pointer border-1 border-r-0 border-gray-300 py-1 px-5 rounded-l-lg ${toggle===true?"bg-[#e7fe29]":""}`}>
            Available
          </button>
          <button onClick={()=>setToggle(false)} className={`font-semibold cursor-pointer border-1 border-r-0 border-gray-300 py-1 px-5 rounded-r-lg ${toggle===false?"bg-[#e7fe29]":""}`}>
            Selected <span>(0)</span>
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
          <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense fallback={
            <h1 className="text-center my-30">
              <span className="loading loading-dots loading-xl"></span>
            </h1>
          }>
          <SelectedPlayers></SelectedPlayers>
        </Suspense>
      )}
    </>
  );
}

export default App;
