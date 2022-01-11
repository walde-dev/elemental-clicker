import Header from "./components/Header";
import "../styles/globals.css"
import React, { useEffect, useRef, useState } from "react";
import useInterval from "./components/Logic/Hooks/useInterval";
import SideBar from "./components/SideBar";
import SideBarPanel from "./components/SideBarPanels/SideBarPanel";
import MainMenu from "./components/MainMenu";
import main, { initializeBuildings, initializePlayer } from "./data/main";



function MyApp({ Component, pageProps }) {


  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState();

  const player = initializePlayer();
  const buildings = initializeBuildings();

  const [coins, setCoins] = useState(player.coins);

  useInterval(() => {
    player.tick();
  }, 1000);

  useEffect(() => {
    console.log('USEEFFECT')
    setCoins(player.coins);
  }, [player.coins])


  return (
    <div className='flex flex-col font-roboto font-light md:px-16 py-7 bg-main-background-blue w-screen max-w-full h-screen'>
      <Header coins={coins} player={player} />

      <div className='flex flex-row h-full'>
        <div className='flex flex-row mt-7 absolute md:left-16 left-0 h-[80vh]'>
          <SideBar
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            setCurrentPanel={setCurrentPanel}
          />
          <SideBarPanel
            isSideBarOpen={isSideBarOpen}
            setIsSideBarOpen={setIsSideBarOpen}
            currentPanel={currentPanel}
          />

        </div>

        {/* Playable Area */}
        <div
          className='w-full h-full'
          onClick={() => player.click()}
        >
        </div>

        <div className='flex flex-row w-5/12 max-w-md mt-7 absolute md:right-16 right-0 h-[80vh]'>
          <MainMenu
            buildings={buildings}
          />
        </div>

      </div>


    </div>
  );
}

export default MyApp
