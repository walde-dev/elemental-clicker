import { useDispatch, useSelector } from "react-redux";
import useInterval from "./Logic/Hooks/useInterval";
import player, { tick, click, setStatistics } from "../redux/store/player";
import { useState } from "react";
import { RiCoinFill } from "react-icons/ri";


export default function PlayArea(props) {

    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(false);


    useInterval(() => {
        dispatch(tick())
    }, 1000);

    function clickLocal() {
        dispatch(click())
        dispatch(setStatistics({ type: 'manualClicks', value: 1 }))
        setIsVisible(true);
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    }

    return (
        <div
            className='w-full h-full'
            onClick={() => clickLocal()}
        >
            {isVisible && (
                <CoinPopup />
            )}
        </div>
    );
}

function CoinPopup() {

    const player = useSelector(state => state.player);



    return (
        <div className='flex flex-row font-semibold text-2xl space-x-2 items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div>
                + {player.coinsPerClick}
            </div>
            <RiCoinFill className='w-6 h-6 text-gold-yellow'/>
        </div>
    );
}