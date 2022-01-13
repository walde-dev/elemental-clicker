import { ArrowUpIcon } from "@heroicons/react/solid";
import { AiOutlineTrophy } from 'react-icons/ai'
import SideBarButton from "./Buttons/SideBarButton";
import UpgradesMenu from "./SideBarPanels/UpgradesMenu";

export default function SideBar(props) {
    return (
        <div className={`w-[100px] h-full bg-secondary-blue py-4  ${props.isSideBarOpen ? 'rounded-bl-2xl rounded-tl-2xl' : 'rounded-2xl'}`}>
            <div className='flex flex-col items-center space-y-2'>
                <SideBarButton {...props} icon={ArrowUpIcon} panel={<UpgradesMenu {...props}/>} />
                <SideBarButton {...props} icon={AiOutlineTrophy} />
            </div>
        </div>
    );
}