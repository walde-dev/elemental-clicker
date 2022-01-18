import { useDispatch } from "react-redux";
import useInterval from "./Logic/Hooks/useInterval";
import { tick, click, setStatistics } from "../redux/store/player";


export default function PlayArea(props) {

    const dispatch = useDispatch();

    useInterval(() => {
        dispatch(tick())
    }, 1000);

    function clickLocal(){
        dispatch(click())
        dispatch(setStatistics({ type: 'manualClicks', value: 1 }))
    }

    return (
        <div
            className='w-full h-full'
            onClick={() => clickLocal()}
        >
        </div>
    );
}