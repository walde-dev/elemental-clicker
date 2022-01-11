import Header from "./components/Header";
import "../styles/globals.css"
import { useEffect, useRef, useState } from "react";
import useInterval from "./components/Logic/Hooks/useInterval";
import SideBar from "./components/SideBar";
import SideBarPanel from "./components/SideBarPanels/SideBarPanel";



function MyApp({ Component, pageProps }) {

  const [coins, setCoins] = useState(0)
  const [coinsPerSecond, setCoinsPerSecond] = useState(0);
  const [coinsPerClick, setCoinsPerClick] = useState(1);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [currentPanel, setCurrentPanel] = useState();


  function click() {
    setCoins(coins + coinsPerClick);
  }

  function tick() {
    console.log('TICK')
    setCoins(coins + coinsPerSecond);
  }

  useInterval(() => {
    tick();
  }, 1000);




  return (
    <div className='flex flex-col font-roboto font-light lg:px-32 md:px-16 py-7 bg-main-background-blue w-screen max-w-full h-screen'>
      <Header coins={coins} coinsPerSecond={coinsPerSecond} coinsPerClick={coinsPerClick} />

      <div className='flex flex-row mt-7 h-full'>
        <div className='flex flex-row '>
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
          onClick={() => click()}
        >

        </div>

      </div>


    </div>
  );
}

export default MyApp
