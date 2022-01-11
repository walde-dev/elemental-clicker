import { ArrowUpIcon } from "@heroicons/react/solid";
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { FaMagic } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';

import MainMenuButton from "./Buttons/MainMenuButton";
import SideBarButton from "./Buttons/SideBarButton";
import Upgrades from "./SideBarPanels/Upgrades";

export default function MainMenu(props) {
    return (
        <div className={`w-full h-full bg-secondary-blue py-4  rounded-2xl`}>
            <div className='flex flex-col items-center space-y-2'>
                <div className='flex flex-row space-x-2'>
                    <MainMenuButton icon={BsFillHouseDoorFill}/>
                    <MainMenuButton icon={FaMagic} />
                    <MainMenuButton icon={AiFillShopping}/>
                </div>

                
            </div>
        </div>
    );
}