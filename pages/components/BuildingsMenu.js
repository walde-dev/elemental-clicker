import {CgSandClock} from "react-icons/cg";

export default function BuildingsMenu(props) {


    return (
        <div>
            <ul role='list' className=' grid gap-2 grid-rows-1 sm:grid-rows-1 md:grid-rows-1 lg:grid-rows-1 xl:grid-rows-1 '>
                {(props.buildings) && props.buildings.map(building => (
                    <li
                        key={building.name}
                        className=' font-inter col-span-1 flex flex-col text-center justify-center '
                    >
                        <div className='w-full h-[100px] font-light bg-hover-grey hover:bg-selected-grey text-grey px-4 py-2'>
                            <div className='flex flex-row h-full'>
                                <div className='flex flex-col justify-evenly w-10/12 '>
                                    <div className='flex flex-row  justify-evenly'>
                                        <div className=''>
                                            {building.icon && (
                                                <>
                                                    {building.icon}
                                                </>
                                            )}
                                        </div>
                                        <div className='self-center text-xl w-6/12'>
                                            {building.name}
                                        </div>
                                    </div>
                                    <div className='flex flex-row  justify-evenly'>
                                        <div className='flex flex-row'>
                                            
                                            {building.production}
                                        </div>
                                        <div className='self-center text-xl w-6/12'>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className='flex w-2/12 items-center justify-center'>
                                    <div className='text-accent-blue font-medium text-2xl'>
                                        {building.amount}
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