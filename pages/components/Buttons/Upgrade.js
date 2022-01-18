import { useState } from "react";
import { MdUpgrade } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCoins } from "../../redux/store/player";
import { buyUpgrade, checkAll, setChecked } from "../../redux/store/upgrades";
import { RiCoinFill } from "react-icons/ri";
import { addToMultiplier } from "../../redux/store/buildings";
import { BsCircle, BsCircleFill } from "react-icons/bs";

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

        switch (props.upgrade.type) {

            /* Building Tiers */
            case 'buildingTier':
                Object.entries(buildings).map(building => {
                    if (building[1].name.toLowerCase() !== props.upgrade.building) return;
                    dispatch(addToMultiplier({ name: building[1].name, amount: props.upgrade.multiplier }));
                })
                break;

            default:
                break;
        }

    }

    function check(){
        dispatch(setChecked(props.upgrade));
    }

    return (

        <div
            className='flex justify-center group px-4 pt-3 pb-6 items-center hover:bg-selected-grey rounded-2xl'
            onClick={() => {
                if (!props.upgrade.isBought) buy();
            }}
            onMouseEnter={() => {
                if (!props.upgrade.isChecked) check()
            }}
        >
            <div className={`flex flex-row  relative rounded-lg px-1 py-1  ${props.upgrade.isBought ? '' : ''}`}>
                <div className={`self-center text-white ${props.upgrade.isBought ? '' : ''} `}>
                    {props.upgrade.icon}
                </div>
                {!props.upgrade.isBought && (
                    <div className='absolute -ml-2 -mt-2 text-white rounded-full px-0.5 py-0.5 bg-accent-blue'>
                        <MdUpgrade />
                    </div>
                )}
                {props.upgrade.isBought && (
                    <div className='absolute  ml-6 -mt-4  rounded-full text-green-600'>
                        <AiFillCheckSquare className='w-5 h-5' />
                    </div>
                )}
                {!props.upgrade.isChecked && (
                    <div className='absolute -mt-1 ml-6 rounded-full'>
                        <BsCircleFill className='w-3 h-3 text-red-700' />
                    </div>
                )}
                <div className='flex justify-center absolute mt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] w-10 min-w-max font-semibold text-white rounded-full px-0.5 py-0.5 bg-accent-blue'>
                    Tier {romanize(props.upgrade.tier)}
                </div>


                <div className='flex scale-0 group-hover:scale-100 justify-center absolute -mt-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs w-10 min-w-max font-normal text-white rounded-md px-4 py-2 bg-accent-blue border-grey border-2'>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold'>
                            {props.upgrade.name}
                        </div>
                        <div className='mt-2'>
                            {props.upgrade.effectText}
                        </div>
                        {!props.upgrade.isBought && (
                            <div className='mt-1'>
                                <div className='flex flex-row space-x-1 items-center'>
                                    <div>
                                        Cost:
                                    </div>
                                    <div className='font-semibold'>
                                        {props.upgrade.cost}
                                    </div>
                                    <div>
                                        <RiCoinFill className='text-gold-yellow' />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}