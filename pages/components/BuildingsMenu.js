import { CgSandClock } from "react-icons/cg";
import { RiCoinFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { abbreviateNumber } from "../components/Logic/logic";
import { buyAmount, getCost, getProduction, getTotalProduction, updateTotalProduction } from "../redux/store/buildings";
import { setCoins, updateCoinsPerSecond } from "../redux/store/player";


export default function BuildingsMenu(props) {

    const buildings = useSelector(state => state.buildings)
    const player = useSelector(state => state.player);
    const dispatch = useDispatch();
    dispatch(updateCoinsPerSecond(getTotalProduction(buildings)));


    function buyBuilding(state, action) {
        if (player.coins >= getCost(state)){
            dispatch(buyAmount(state, action));
            dispatch(setCoins(player.coins-getCost(state)));
        }
    }





    return (
        <div>
            <ul role='list' className=' grid gap-2 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(buildings) && Object.entries(buildings).map(building => (

                    <li
                        key={building[1].name}
                        className=' font-inter col-span-1 flex flex-col text-center justify-center '
                    >
                        <div
                            className='w-full h-[75px] font-light bg-hover-grey hover:bg-selected-grey text-grey px-4 py-2'
                            onClick={() => buyBuilding(building[1], building[1].name)}
                        >
                            <div className='flex flex-row h-full'>
                                <div className='flex flex-col justify-between w-10/12 '>
                                    <div className='flex flex-row  justify-evenly'>
                                        <div className=''>
                                            {building[1].icon && (
                                                <>
                                                    {building[1].icon}
                                                </>
                                            )}
                                        </div>
                                        <div className='self-center text-xl w-6/12'>
                                            {building[1].name}
                                        </div>
                                    </div>
                                    <div className='flex flex-row px-4  justify-between'>
                                        <div className='flex flex-row w-6/12 space-x-2'>
                                            <div className=''>
                                                <CgSandClock className='w-6 h-6' />
                                            </div>
                                            <div className='self-center  '>
                                                {abbreviateNumber(getProduction(building[1]))+'/s'}
                                            </div>
                                        </div>
                                        <div className='flex flex-row w-6/12 space-x-2'>
                                            <div className=''>
                                                <RiCoinFill className='w-6 h-6' />
                                            </div>
                                            <div className='self-center '>
                                                {abbreviateNumber(getCost(building[1]))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-2/12 items-center justify-center'>
                                    <div className='text-accent-blue font-medium text-2xl'>
                                        {building[1].amount}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}