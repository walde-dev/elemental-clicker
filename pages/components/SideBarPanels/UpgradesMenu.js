import { useEffect } from "react";
import { useSelector } from "react-redux";
import Upgrade from "../Buttons/Upgrade";

export default function UpgradesMenu(props) {

    const upgrades = useSelector(state => state.upgrades)

    console.log(upgrades)



    if (props.isSideBarOpen) {
        return <></>
    }

    return (
        <div className='flex flex-col items-center px-2 py-2'>
            <div className='flex mt-4 justify-center items-center text-white font-normal text-2xl bg-selected-grey rounded-md w-[237px] h-[60px]'>
                Upgrades
            </div>
            <div className='flex mt-10 justify-center items-center text-white text-md bg-selected-grey rounded-2xl w-[237px] h-[30px]'>
                Available Upgrades
            </div>

            <ul role='list' className='mt-4 grid gap-x-2 gap-y-9 grid-cols-6  w-full'>
                {(upgrades) && Object.entries(upgrades).filter(upgrade => upgrade[1].isUnlocked).map(upgrade => (

                    <li
                        key={upgrade[1].id}
                        className='max-w-min'
                    >
                        <Upgrade upgrade={upgrade[1]}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}