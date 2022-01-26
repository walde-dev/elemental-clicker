import { GiPotionBall } from "react-icons/gi"
import { useSelector } from "react-redux"
import { abbreviateNumber } from "./Logic/logic"

export default function MagicMenu() {

    const spells = useSelector(state => state.magic)


    return (
        <div className='flex flex-col  h-full justify-between px-4 py-2'>
            <ul role='list' className=' grid gap-0 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(spells) && Object.entries(spells).map(spell => (

                    <li
                        key={spell[1].name}
                        className=' font-inter group col-span-1 flex flex-col text-center justify-center '
                    >
                        <div className='flex flex-row relative text-white  py-2 hover:bg-hover-grey'>
                            <div className=''>
                                {spell[1].icon && (
                                    <>
                                        {spell[1].icon}
                                    </>
                                )}
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className='font-semibold text-lg'>
                                    {spell[1].name}
                                </div>
                                <div className='flex flex-row space-x-1 self-center'>
                                    <div className='font-medium'>
                                        {abbreviateNumber(spell[1].cost)}
                                    </div>
                                    <div className='self-center text-blue-500'>
                                        <GiPotionBall />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr className='w-full  border-selected-grey  border-4' />

                        </div>

                        <div className='flex z-50 opacity-100  group-hover:scale-100 scale-0 justify-center fixed transform -translate-x-full -mt-2 -ml-8 text-xs w-10 min-w-max font-medium text-white rounded-md px-4 py-2 bg-accent-blue border-grey border-2'>
                            <div className='flex flex-col items-center'>
                                <div className='text-lg font-semibold'>
                                    {spell[1].name}
                                </div>
                                <div className='mt-1'>
                                    <div className='flex flex-row space-x-1 items-center'>
                                        <div>
                                            Cost:
                                        </div>
                                        <div className='font-semibold'>
                                            {abbreviateNumber(spell[1].cost)}
                                        </div>
                                        <div>
                                            Mana                                    </div>
                                    </div>
                                </div>
                                <div className='w-56 mt-2 break-normal text-center'>
                                    {spell[1].effectText}
                                </div>
                                {(spell[1].effectValue || spell[1].effectValue === 0) && (
                                    <div className='mt-2'>

                                        {spell[1].bonusType === 'add' && (
                                            <div>
                                                (+{abbreviateNumber(spell[1].effectValue)})
                                            </div>
                                        )}
                                        {spell[1].bonusType === 'mul' && (
                                            <div>
                                                ({abbreviateNumber(spell[1].effectValue)}%)
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>


                    </li>)
                )}

            </ul>
        </div>
    )
}
