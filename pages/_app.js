import Header from "./components/Header";
import "../styles/globals.css"
import { useEffect, useRef, useState } from "react";
import useInterval from "./components/Logic/Hooks/useInterval";



function MyApp({ Component, pageProps }) {

  const [coins, setCoins] = useState(0)
  const [coinsPerSecond, setCoinsPerSecond] = useState(0);
  const [coinsPerClick, setCoinsPerClick] = useState(1);


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
    <div
      className='flex flex-col font-roboto font-light lg:px-32 md:px-16 py-7 bg-main-background-blue w-screen max-w-full max-h-full h-full min-h-screen'
      onClick={() =>
        click()
      }>
      <Header coins={coins} coinsPerSecond={coinsPerSecond} coinsPerClick={coinsPerClick} />
    </div>
  );
}

export default MyApp
