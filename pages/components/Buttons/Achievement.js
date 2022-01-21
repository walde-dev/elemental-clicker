import { useDispatch } from "react-redux";
import { setAchievementChecked } from "../../redux/store/achievements";

export default function Achievement(props) {

    const dispatch = useDispatch();


    function check() {
        dispatch(setAchievementChecked(props.achievement));
    }

    return (

        <div
            className='flex justify-center group px-4 w-16 h-16  items-center hover:bg-selected-grey rounded-2xl'
            onMouseEnter={() => {
                if (!props.achievement.isChecked) check()
            }}
        >
            <div className={`flex flex-row relative rounded-lg px-1 py-1   `}>
                <div className={`flex flex-row relative rounded-lg px-1 py-1  ${!props.achievement.isUnlocked ? 'opacity-50 grayscale' : ''}`}>
                    <div className={`self-center text-white  `}>
                        {props.achievement.icon}
                    </div>
                </div>


                <div className='flex z-50 opacity-100 scale-0 group-hover:scale-100 justify-center fixed transform -translate-y-full -mt-6 -ml-24  text-xs w-10 min-w-max font-normal text-white rounded-md px-4 py-2 bg-accent-blue border-grey border-2'>
                    <div className='flex flex-col items-center'>
                        <div className='font-semibold'>
                            {props.achievement.name}
                        </div>

                        <div className='w-56 mt-2 break-normal text-center'>
                            {props.achievement.unlockText}
                        </div>

                        {!props.achievement.isUnlocked && (
                            <div className='mt-2 font-semibold'>
                                ({((props.achievement.valueToCheck / props.achievement.amount) * 100).toFixed(2)}%)
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}
