import {FaWarehouse} from "react-icons/fa";
import Building from "./Buildings/Building";

export default function main(props){

    /* initialize buildings */

    const Farm = new Building('Farm', <FaWarehouse className='building-icon'/>, 10, 0, true, 2, 1)


    let buildings = [];
    buildings.push(Farm);
    return buildings;

}