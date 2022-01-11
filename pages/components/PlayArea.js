import { useDispatch } from "react-redux";
import useInterval from "./Logic/Hooks/useInterval";
import {tick, click} from "../redux/store/player";


export default function PlayArea(props) {

    const dispatch = useDispatch();

    useInterval(() => {
        dispatch(tick())
      }, 1000);

    return (
        <div
            className='w-full h-full'
            onClick={() => dispatch(click())}
        >
        </div>
    );
}