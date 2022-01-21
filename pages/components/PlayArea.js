import { useDispatch, useSelector } from "react-redux";
import useInterval from "./Logic/Hooks/useInterval";
import player, { tick, click, setStatistics, getCoinsPerClick, getCoinsPerSecond } from "../redux/store/player";
import { useReducer, useState } from "react";
import { RiCoinFill } from "react-icons/ri";


export default function PlayArea(props) {

    const dispatch = useDispatch();
    const player = useSelector(state => state.player);


    useInterval(() => {
        dispatch(tick())
        dispatch(setStatistics({
            type: 'coinsEarned',
            value: getCoinsPerSecond(player),
        }));
    }, 1000);

    function clickLocal() {
        dispatch(click())
        dispatch(setStatistics({ type: 'manualClicks', value: 1 }))
        dispatch(setStatistics({ type: 'coinsByClicking', value: player.coinsPerClick }))   
        dispatch(setStatistics({
            type: 'coinsEarned',
            value: getCoinsPerClick(player),
        }));
    }

    return (
        <div
            className='w-full h-full'
            onClick={() => clickLocal()}
        >
            
        </div>
    );
}

function CoinPopup() {

    const [isVisible, setIsVisible] = useState(true);
    const player = useSelector(state => state.player);

    setTimeout(() => {
        setIsVisible(false);    
    }, 1000);


    return isVisible && (
        <div className='flex flex-row font-semibold text-2xl space-x-2 items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div>
                + {player.coinsPerClick}
            </div>
            <RiCoinFill className='w-6 h-6 text-gold-yellow' />
        </div>
    );
}