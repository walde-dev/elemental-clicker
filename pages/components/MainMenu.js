import { ArrowUpIcon } from "@heroicons/react/solid";
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaMagic } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';

import MainMenuButton from "./Buttons/MainMenuButton";
import SideBarButton from "./Buttons/SideBarButton";
import Upgrades from "./SideBarPanels/UpgradesMenu";
import BuildingsMenu from "./BuildingsMenu";

export default function MainMenu(props) {
    return (
        <div className={`w-full h-full bg-secondary-blue py-4  rounded-2xl`}>
            <div className='flex flex-col  items-center'>
                <div className='flex flex-row space-x-2 px-4'>
                    <MainMenuButton icon={BsFillHouseDoorFill} />
                    <MainMenuButton icon={FaMagic} />
                    <MainMenuButton icon={AiFillShopping} />
                </div>
                <div className='w-full px-4'>
                    <hr className='w-full mt-3 border-selected-grey  border-1' />
                </div>

                <div className='w-full'>
                    <BuildingsMenu {...props} />
                </div>

            </div>
        </div>
    );
}