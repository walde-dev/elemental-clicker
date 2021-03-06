import { useState } from "react";
import { MdUpgrade } from "react-icons/md";
import { AiFillCheckSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setCoins, updateCoinsPerClick } from "../../redux/store/player";
import { buyUpgrade, checkAll, checkAllUpgrades, setUpgradeChecked } from "../../redux/store/upgrades";
import { RiCoinFill } from "react-icons/ri";
import { addToMultiplier } from "../../redux/store/buildings";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "../Logic/logic";

export default function Upgrade(props) {

    const [isUnlocked, setIsUnlocked] = useState(false);

    const dispatch = useDispatch();
    const player = useSelector(state => state.player);
    const buildings = useSelector(state => state.buildings);
    const upgrades = useSelector(state => state.upgrades)

    dispatch(checkAllUpgrades({
        buildings: buildings,
        player: player,
        upgrades: upgrades,
    }));


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


    function check() {
        dispatch(setUpgradeChecked(props.upgrade));
    }

    return (

        <div
            className='flex justify-center group px-4 w-16 h-16  items-center hover:bg-selected-grey rounded-2xl'
            onClick={() => {
                if (!props.upgrade.isBought && props.buy) props.buy(props.upgrade);
            }}
            onMouseEnter={() => {
                if (!props.upgrade.isChecked) check()
            }}
        >
            <div className={`flex flex-row relative rounded-lg px-1 py-1  ${props.upgrade.isBought ? '' : ''} `}>
                <div className={`flex flex-row relative rounded-lg px-1 py-1  ${props.upgrade.isBought ? '' : ''} ${player.coins < props.upgrade.cost && !props.upgrade.isBought ? 'opacity-50' : ''}`}>
                    <div className={`self-center text-white ${props.upgrade.isBought ? '' : ''} `}>
                        {props.upgrade.icon}
                    </div>
                    {!props.upgrade.isBought && !props.upgrade.skipBuyAll && (
                        <div className='flex justify-center items-center absolute -ml-2 -mt-2 text-white rounded-full w-4 h-4 px-0.5 py-0.5 bg-accent-blue'>
                            <MdUpgrade className='w-4 h-4 self-center'/>
                        </div>
                    )}
                    {(props.upgrade.isBought && props.upgrade.tier) && (
                        <div className='absolute  ml-6 -mt-4  rounded-full text-green-600'>
                            <AiFillCheckSquare className='w-5 h-5' />
                        </div>
                    )}
                    {(!props.upgrade.isChecked && !props.upgrade.isBought) && (
                        <div className='absolute -mt-1 ml-6 rounded-full'>
                            <BsCircleFill className='w-3 h-3 text-red-700' />
                        </div>
                    )}

                    {props.upgrade.tier && (
                        <div className='flex justify-center absolute mt-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] w-10 min-w-max font-semibold text-white rounded-full px-1 py-0.5 bg-accent-blue'>
                            <div>
                                Tier {romanize(props.upgrade.tier)}
                            </div>
                        </div>
                    )}
                </div>


                <div className='flex z-50 opacity-100 scale-0 group-hover:scale-100 justify-center fixed transform -translate-y-full -mt-6 -ml-24  text-xs w-10 min-w-max font-medium text-white rounded-md px-4 py-2 bg-accent-blue border-grey border-2'>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold'>
                            {props.upgrade.name}
                        </div>
                        {!props.upgrade.isBought && (
                            <div className='mt-1'>
                                <div className='flex flex-row space-x-1 items-center'>
                                    <div>
                                        Cost:
                                    </div>
                                    <div className='font-semibold'>
                                        {abbreviateNumber(props.upgrade.cost)}
                                    </div>
                                    <div>
                                        <RiCoinFill className='text-gold-yellow' />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className='w-56 mt-2 break-normal text-center'>
                            {props.upgrade.effectText}
    
                            {(props.upgrade.effectValue || props.upgrade.effectValue === 0) && (
                                <div className='mt-2'>
                                    
                                    {props.upgrade.bonusType === 'add' && (
                                        <div>
                                            (+{abbreviateNumber(props.upgrade.effectValue)})
                                        </div>
                                    )}
                                    {props.upgrade.bonusType === 'mul' && (
                                        <div>
                                            ({abbreviateNumber(props.upgrade.effectValue)}%)
                                        </div>
                                    )}
                                </div>
                            )}
                            
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}