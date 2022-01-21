import { useState } from "react";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function SideBarButton(props) {

    const [newItems, setNewItems] = useState(false);
    const upgrades = useSelector(state => state.upgrades)
    const achievements = useSelector(state => state.achievements)

    let counter = 0;
    switch (props.itemsToCheck) {

        case 'upgrades':
            Object.entries(upgrades).map(upgrade => {
                if (!upgrade[1].isChecked && upgrade[1].isUnlocked && !upgrade[1].isBought) {
                    counter += 1;
                }
            });
            if (counter > 0 && !newItems) {
                setNewItems(true);
            } else if (counter === 0 && newItems) {
                setNewItems(false);
            }
            break;

        case 'upgrades':
            Object.entries(achievements).map(achievement => {
                if (!achievement[1].isChecked && achievement[1].isUnlocked) {
                    counter += 1;
                }
            });
            if (counter > 0 && !newItems) {
                setNewItems(true);
            } else if (counter === 0 && newItems) {
                setNewItems(false);
            }
            break;

        default:
            break;
    }

    return (
        <div
            className='flex justify-center items-center w-[81px] h-[69px]  hover:bg-hover-grey rounded-2xl cursor-pointer '
            onClick={() => {
                props.setIsSideBarOpen(!props.isSideBarOpen);
                props.setCurrentPanel(props.panel);
                
            }}
        >
            <props.icon
                className='py-1 px-1 w-10 h-10 rounded-md text-white bg-accent-blue'
            />
            {newItems && (
                <div className='absolute -mt-10 ml-10 rounded-full'>
                    <BsCircleFill className='w-3 h-3 text-red-700' />
                </div>
            )}
        </div>
    );
}