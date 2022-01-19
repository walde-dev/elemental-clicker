import { HiCursorClick } from 'react-icons/hi'
import { FaCoins } from 'react-icons/fa'
import { GiOpenTreasureChest } from 'react-icons/gi';



export function CoinsByClickingIcon() {
    return (
        <div className='w-8 h-8'>
            <div className='absolute '>
                <FaCoins className='w-6 h-6 text-gold-yellow'/>
            </div>
            <div className='absolute ml-5 mt-3'>
                <HiCursorClick className='w-4 h-4 text-white'/>
            </div> 
        </div>
    );
}

export function CoinsEarnedIcon() {
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