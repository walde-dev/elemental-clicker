import { useSelector } from "react-redux";
import Achievement from "../Buttons/Achievement";

export default function AchievementsMenu(props) {

    const achievements = useSelector(state => state.achievements)

    if (props.isSideBarOpen) {
        return <></>
    }
    
    return (
        <div className='flex flex-col relative items-center px-2 py-2 text-white'>
            <div className='flex mt-4 relative justify-center items-center  font-normal text-2xl bg-selected-grey rounded-md w-[237px] h-[60px]'>
                Achievements
            </div>

            <ul role='list' className='mt-4 grid h-[200px]  grid-cols-6 grid-rows-3  w-full overflow-auto'>
                {(achievements) && Object.entries(achievements).map(
                    achievement => (

                        <li
                            key={achievement[1].name}
                            className='max-w-min'
                        >
                            <Achievement achievement={achievement[1]} />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
