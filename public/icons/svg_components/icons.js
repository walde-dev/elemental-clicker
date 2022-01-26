import { HiCursorClick } from 'react-icons/hi'
import { FaCoins } from 'react-icons/fa'
import { GiAbstract053, GiOpenTreasureChest, GiScales, GiTripleYin } from 'react-icons/gi';

const tierColors = {
    1: 'bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600',
    2: 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600',
    3: 'bg-gradient-to-br from-lime-200 via-lime-400 to-lime-600',
    4: '',
    5: '',
}

export function JoinOrderIcon(props) {
    return (
        <div className='flex justify-center items-center rounded-md w-12 h-12 bg-gradient-to-br from-sky-200 to-sky-600'>
            <GiScales className='w-8 h-8 ' />
        </div>
    );
}

export function JoinChaosIcon(props) {
    return (
        <div className='flex justify-center items-center rounded-md w-12 h-12 bg-gradient-to-br from-red-400 via-red-400 to-orange-800'>
            <GiAbstract053 className='w-8 h-8 ' />
        </div>
    );
}

export function OrderUpgradeIcon(props){
    return (
        <div className='flex shape-octagon justify-center items-center rounded-md w-10 h-10 bg-gradient-to-br from-sky-200 to-sky-600'>
            <GiScales className='w-8 h-8 ' />
        </div>
    );
}


export function CoinsByClickingIcon(props) {
    return (
        <div className='w-8 h-8'>
            <div className='absolute '>
                <FaCoins className='w-6 h-6 text-gold-yellow' />
            </div>
            <div className={`absolute ml-5 mt-3  `}>
                <HiCursorClick className={`rounded-md  w-4 h-4 `} />
            </div>
        </div>
    );
}

export function CoinsEarnedIcon(props) {
    return (
        <div className='w-8 h-8'>
            <div className='absolute '>
                <GiOpenTreasureChest className='w-6 h-6 text-gold-yellow' />
            </div>
            <div className='absolute ml-5 mt-3'>
                <HiCursorClick className='w-4 h-4 text-white' />
            </div>
        </div>
    );
}


export function ElementalRushIcon(props){
    return (
        <div className='w-12 h-12 bg-gradient-to-br from-red-800 via-green-700 to-sky-700 px-1.5 py-1.5 rounded-md'>
            <GiTripleYin className='w-full h-full'/>
        </div>
    );
}