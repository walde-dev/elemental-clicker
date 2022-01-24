import { useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { RiCoinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { abbreviateNumber } from "../components/Logic/logic";
import { buyAmount, buyBuildingAmount, getCost, getProduction, getTotalProduction, getTotalProductionFromBuildings, isBuildingUnlocked, unlockBuilding, updateTotalProduction } from "../redux/store/buildings";
import { setCoins, updateCoinsPerSecond } from "../redux/store/player";
import { checkAll, checkAllUpgrades } from "../redux/store/upgrades";


export default function BuildingsMenu(props) {

    const buildings = useSelector(state => state.buildings)
    const player = useSelector(state => state.player);
    const upgrades = useSelector(state => state.upgrades);
    const dispatch = useDispatch();
    let showPreview = true;

    const [buyAmount, setBuyAmount] = useState(1);

    Object.entries(buildings).map(building => {
        if ((player.coins >= building[1].baseCost) && !building[1].isUnlocked) {
            dispatch(unlockBuilding(building[1], building[1]));
        }
    })




    dispatch(updateCoinsPerSecond(getTotalProductionFromBuildings(buildings)));
    dispatch(checkAllUpgrades({
        buildings: buildings,
        player: player,
    }));

    function buyBuilding(state) {
        if (player.coins >= getLocalCost(state).cost) {
            dispatch(buyBuildingAmount({
                name: state.name,
                amount: getLocalCost(state).amount,
            }));
            dispatch(setCoins(player.coins - getLocalCost(state).cost));

        }
    }

    function getLocalCost(state) {
        let amountToBuy = buyAmount === 'MAX' ? 0 : buyAmount;
        let cost = 0;
        let coins = player.coins;
        let buildingAmount = state.amount;
        
        if (buyAmount === 1) {
            return {
                amount: amountToBuy,
                cost: getCost(state),
            }
        }


        let tempAmount = amountToBuy;
        
        while(tempAmount > 0){
            cost += state.baseCost * Math.pow(1.15, buildingAmount)
            buildingAmount += 1;
            tempAmount -= 1;
        }

        if(amountToBuy === 0){
            let counter = 0;
            while(true){
                if(cost + state.baseCost * Math.pow(1.15, buildingAmount) > player.coins){        
                    break;
                }
                cost += state.baseCost * Math.pow(1.15, buildingAmount)
                buildingAmount += 1;
                counter += 1;
            }
            if(cost === 0){
                cost = getCost(state);
            }
            if(counter === 0){
                counter = 1;
            }
            return {
                amount: counter,
                cost: cost,
            
            }
        }



        return {
            amount: amountToBuy,
            cost: cost,
        }

    }





    return (
        <div className='flex flex-col  h-full justify-between'>
            <ul role='list' className=' grid gap-0 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(buildings) && Object.entries(buildings).map(building => (

                    <li
                        key={building[1].name}
                        className=' font-inter col-span-1 flex flex-col text-center justify-center '
                    >
                        {(building[1].isUnlocked) && (
                            <div>
                                <div
                                    className={`w-full h-[60px] font-light hover:bg-hover-grey  text-grey px-4 ${player.coins < getLocalCost(building[1]).cost ? 'opacity-30' : ''}`}
                                    onClick={() => buyBuilding(building[1])}
                                >
                                    <div className='flex flex-row  h-full'>
                                        <div className='self-center w-2/12'>
                                            {building[1].icon && (
                                                <>
                                                    {building[1].icon}
                                                </>
                                            )}
                                        </div>
                                        <div className='flex flex-col  w-8/12 '>
                                            <div className='flex flex-row '>
                                                <div className='text-sm font-normal'>
                                                    {building[1].name}
                                                </div>
                                            </div>
                                            <div className='flex flex-row space-x-2'>
                                                <div className='self-center text-gold-yellow'>
                                                    <RiCoinFill className='w-3 h-3' />
                                                </div>
                                                <div className='flex flex-row space-x-1 self-center text-sm'>
                                                    {(getLocalCost(building[1]).amount !== 1 || buyAmount === 'MAX') && (
                                                        <div className='text-xs self-center '>
                                                            x{getLocalCost(building[1]).amount}
                                                        </div>
                                                    )}
                                                    <div>
                                                        {abbreviateNumber(getLocalCost(building[1]).cost)}
                                                    </div>
                                                </div>
                                            </div>
                                            {building[1].amount > 0 && (
                                                <div className='flex flex-row space-x-2 '>
                                                    <div className='self-center'>
                                                        <CgSandClock className='w-3 h-3' />
                                                    </div>
                                                    <div className='flex flex-row space-x-1 self-center text-sm'>
                                                        <div>
                                                            {((getProduction(building[1]) / getTotalProductionFromBuildings(buildings)) * 100).toFixed(2)}%
                                                        </div>
                                                        <div className={`text-xs self-center opacity-100`}>
                                                            ({abbreviateNumber(getProduction(building[1])) + '/s'})
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                        <div className='flex w-2/12 items-center justify-center'>
                                            <div className='text-accent-blue font-medium text-2xl'>
                                                {building[1].amount}
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div>
                                    <hr className='w-full  border-selected-grey  border-4' />

                                </div>
                            </div>

                        )}


                        {!building[1].isUnlocked && showPreview && (
                            <div>
                                {showPreview = false}
                                <div>
                                    <div
                                        className='w-full h-[60px] font-light text-grey px-4 '
                                        onClick={() => buyBuilding(building[1], building[1].name)}
                                    >

                                        <div className='flex flex-row  h-full'>
                                            <div className='absolute text-3xl font-medium mt-2 ml-40'>
                                                ?
                                            </div>
                                            <div className='self-center w-2/12 blur-sm'>
                                                {building[1].icon && (
                                                    <>
                                                        {building[1].icon}
                                                    </>
                                                )}
                                            </div>
                                            <div className='flex flex-col space-y-2 my-2 w-8/12 '>
                                                <div className='flex flex-row h-2 w-20 bg-hover-grey'>

                                                </div>
                                                <div className='flex flex-row h-2 w-12 bg-hover-grey'>

                                                </div>
                                                <div className='flex flex-row h-2 w-16 bg-hover-grey '>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>

            <div className='flex flex-col px-4 items-center'>
                <div className='w-full '>
                    <hr className='w-full border-selected-grey  border-1' />
                </div>
                <div className='flex flex-row mt-3 space-x-3 self-center'>
                    <div className='text-lg text-white font-normal bg-selected-grey px-2 py-1 rounded-xl'>
                        BUY AMOUNT
                    </div>
                    <div
                        className={`${buyAmount === 1 ? 'bg-accent-blue text-white' : 'bg-grey hover:bg-accent-blue hover:opacity-70 hover:text-white'} text-lg  px-2 py-1 rounded-xl`}
                        onClick={() => {
                            if (buyAmount !== 1) {
                                setBuyAmount(1);
                            }
                        }}
                    >
                        x1
                    </div>
                    <div
                        className={`${buyAmount === 10 ? 'bg-accent-blue text-white' : 'bg-grey hover:bg-accent-blue hover:opacity-70 hover:text-white'} text-lg  px-2 py-1 rounded-xl`}
                        onClick={() => {
                            if (buyAmount !== 10) {
                                setBuyAmount(10);
                            }
                        }}
                    >                        x10
                    </div>
                    <div
                        className={`${buyAmount === 100 ? 'bg-accent-blue text-white' : 'bg-grey hover:bg-accent-blue hover:opacity-70 hover:text-white'} text-lg  px-2 py-1 rounded-xl`}
                        onClick={() => {
                            if (buyAmount !== 100) {
                                setBuyAmount(100);
                            }
                        }}
                    >                        x100
                    </div>
                    <div
                        className={`${buyAmount === 'MAX' ? 'bg-accent-blue text-white' : 'bg-grey hover:bg-accent-blue hover:opacity-70 hover:text-white'} text-lg  px-2 py-1 rounded-xl`}
                        onClick={() => {
                            if (buyAmount !== 'MAX') {
                                setBuyAmount('MAX');
                            }
                        }}
                    >                        MAX
                    </div>
                </div>
            </div>

        </div>

    );
}