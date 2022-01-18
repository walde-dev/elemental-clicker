import { useState } from "react";
import { CgSandClock } from "react-icons/cg";
import { RiCoinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { abbreviateNumber } from "../components/Logic/logic";
import { buyAmount, getCost, getProduction, getTotalProduction, isBuildingUnlocked, unlockBuilding, updateTotalProduction } from "../redux/store/buildings";
import { setCoins, updateCoinsPerSecond } from "../redux/store/player";
import { checkAll } from "../redux/store/upgrades";


export default function BuildingsMenu(props) {

    const buildings = useSelector(state => state.buildings)
    const player = useSelector(state => state.player);
    const upgrades = useSelector(state => state.upgrades);
    const dispatch = useDispatch();
    let showPreview = true;

    Object.entries(buildings).map(building => {
        if ((player.coins >= building[1].baseCost) && !building[1].isUnlocked) {
            dispatch(unlockBuilding(building[1], building[1]));
        }
    })




    dispatch(updateCoinsPerSecond(getTotalProduction(buildings)));
    dispatch(checkAll(buildings));

    function buyBuilding(state, action) {
        if (player.coins >= getCost(state)) {
            dispatch(buyAmount(state, action));
            dispatch(setCoins(player.coins - getCost(state)));

        }
    }





    return (
        <div>
            <ul role='list' className=' grid gap-0 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(buildings) && Object.entries(buildings).map(building => (

                    <li
                        key={building[1].name}
                        className=' font-inter col-span-1 flex flex-col text-center justify-center '
                    >
                        {(building[1].isUnlocked) && (
                            <div>
                                <div
                                    className={`w-full h-[60px] font-light hover:bg-hover-grey  text-grey px-4 ${player.coins < getCost(building[1]) ? 'opacity-30' : ''}`}
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
                                                <div className='text-sm '>
                                                    {building[1].name}
                                                </div>
                                            </div>
                                            <div className='flex flex-row space-x-2'>
                                                <div className='self-center text-gold-yellow'>
                                                    <RiCoinFill className='w-3 h-3' />
                                                </div>
                                                <div className='self-center text-sm'>
                                                    {abbreviateNumber(getCost(building[1]))}
                                                </div>
                                            </div>
                                            {building[1].amount > 0 && (
                                                <div className='flex flex-row space-x-2 '>
                                                    <div className='self-center'>
                                                        <CgSandClock className='w-3 h-3' />
                                                    </div>
                                                    <div className='flex flex-row space-x-1 self-center text-sm'>
                                                        <div>
                                                            {((getProduction(building[1]) / getTotalProduction(buildings)) * 100).toFixed(2)}%
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

        </div>

    );
}