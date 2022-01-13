import { useState } from "react";
import { MdUpgrade } from "react-icons/md";
import {AiFillCheckSquare} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "../../redux/store/player";
import { buyUpgrade, checkAll } from "../../redux/store/upgrades";

export default function Upgrade(props) {

    const [isUnlocked, setIsUnlocked] = useState(false);

    const dispatch = useDispatch();
    const player = useSelector(state => state.player);
    const buildings = useSelector(state => state.buildings);

    dispatch(checkAll(buildings));


    let upgradeColors = [
        'text-gray-400',
    ]

    function romanize(num) {
        if (isNaN(num))
            return NaN;
        var digits = String(+num).split(""),
            key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
                "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
                "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }

    function buy() {
        if (player.coins < props.upgrade.cost) return;
        dispatch(setCoins(player.coins - props.upgrade.cost))
        dispatch(buyUpgrade(props.upgrade))
    }

    return (

        <div
            className='flex justify-center items-center  rounded-2xl'
            onClick={() => {
                if (!props.upgrade.isBought) buy();
            }}
        >
            <div className={`flex flex-row relative border rounded-lg px-1 py-1 ${props.upgrade.isBought ? 'bg-accent-green ' : ''}`}>
                <div className={`self-center  ${props.upgrade.isBought ? 'text-accent-green-secondary' : ''} `}>
                    {props.upgrade.icon}
                </div>
                {!props.upgrade.isBought && (
                    <div className='absolute ml-6 -mt-4 text-white rounded-full px-0.5 py-0.5 bg-accent-blue'>
                        <MdUpgrade />
                    </div>
                )}
                {props.upgrade.isBought && (
                    <div className='absolute  ml-6 -mt-4  rounded-full text-green-600'>
                        <AiFillCheckSquare className='w-5 h-5'/>
                    </div>
                )}
                <div className='flex justify-center absolute mt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] w-10 min-w-max font-semibold text-white rounded-full px-0.5 py-0.5 bg-accent-blue'>
                    Tier {romanize(props.upgrade.tier)}
                </div>
            </div>
        </div>
    );
}