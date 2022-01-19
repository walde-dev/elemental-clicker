import { HiCursorClick } from 'react-icons/hi'
import { FaCoins } from 'react-icons/fa'
import { GiOpenTreasureChest } from 'react-icons/gi';

const tierColors = {
    1: 'bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600',
    2: 'bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600',
    3: 'bg-clip-border bg-gradient-to-br from-lime-200 via-lime-400 to-lime-600',
    4: '',
    5: '',
}



export function CoinsByClickingIcon(props) {
    return (
        <div className='w-8 h-8'>
            <div className='absolute '>
                <FaCoins className='w-6 h-6 text-gold-yellow'/>
            </div>
            <div className={`absolute ml-5 mt-3  `}>
                <HiCursorClick className={`rounded-md  w-4 h-4 `}/>
            </div> 
        </div>
    );
}

export function CoinsEarnedIcon(props) {
    return (
        <div className='w-8 h-8'>
            <div className='absolute '>
                <GiOpenTreasureChest className='w-6 h-6 text-grey'/>
            </div>
            <div className='absolute ml-5 mt-3'>
                <HiCursorClick className='w-4 h-4 text-white'/>
            </div> 
        </div>
    );
}