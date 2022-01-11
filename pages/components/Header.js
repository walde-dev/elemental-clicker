import { useEffect, useState } from 'react'
import Coins from "../../public/icons/coins.svg"
import Clock from "../../public/icons/clock.svg"
import Finger from "../../public/icons/finger.svg"
import Mana from "../../public/icons/mana.svg"
import { CogIcon, InformationCircleIcon, UserIcon, UsersIcon } from '@heroicons/react/solid'
import TopMenuButton from './Buttons/TopMenuButton'
import { abbreviateNumber } from './Logic/logic'
import { useSelector } from 'react-redux'



export default function Header(props) {

    const coins  = useSelector(state => state.player.coins);
    const coinsPerSecond = useSelector(state => state.player.coinsPerSecond);
    const coinsPerClick = useSelector(state => state.player.coinsPerClick);
    const mana = useSelector(state => state.player.mana);

    return (
        <div className='flex flex-row w-full sm:h-[75px] rounded-2xl px-7 bg-secondary-blue text-grey items-center'>

            <div className='flex flex-row w-full justify-between '>
                <div className='flex sm:flex-row flex-col justify-center sm:space-x-5 space-y-1'>
                    <div className='flex flex-row space-x-1.5'>
                        <Coins className='self-center sm:w-10 sm:h-10 w-7 h-7' />
                        <div className='self-center '>
                            {abbreviateNumber(coins)}
                        </div>
                    </div>

                    <div className='flex flex-row space-x-1.5'>
                        <Clock className='self-center w-7 h-7' />
                        <div className='self-center '>
                            {abbreviateNumber(coinsPerSecond)}
                        </div>
                    </div>

                    <div className='flex flex-row space-x-1.5'>
                        <Finger className='self-center w-7 h-7' />
                        <div className='self-center'>
                            {abbreviateNumber(coinsPerClick)}
                        </div>
                    </div>
                </div>

                <div className='flex  sm:flex-row flex-col-reverse justify-evenly sm:justify-between w-5/12 max-w-md'>
                    <div className='flex flex-row self-center space-x-1.5'>
                        <Mana className='self-center w-7 h-7' />
                        <div className='self-center'>
                            {abbreviateNumber(mana)}
                        </div>
                    </div>

                    <div className='flex flex-row justify-around self-center '>
                        <TopMenuButton icon={UserIcon} />
                        <TopMenuButton icon={InformationCircleIcon} />
                        <TopMenuButton icon={CogIcon} />
                    </div>
                </div>
            </div>

        </div>
    )
}