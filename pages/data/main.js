import { FaWarehouse } from "react-icons/fa";
import { GiBlacksmith, GiCastle, GiChurch, GiEgyptianTemple, GiGoldMine, GiWindmill } from "react-icons/gi";
import Building from "./Buildings/Building";
import Player from "./Player/Player";



export default function main(props) {



}

export function initializePlayer(){


    const MainPlayer = new Player( 0, 0, 1, 1000, 1, [0, 0, 0, 0, 0, 0, 0]);
    return MainPlayer;
}

export function initializeBuildings() {
    /* initialize buildings */

    let buildings = [];

    const Farm = new Building(
        'Farm',
        <FaWarehouse className='building-icon' />,
        10,
        0,
        true,
        2,
        1
    )
    buildings.push(Farm);

    const Mine = new Building(
        'Mine',
        <GiGoldMine className='building-icon' />,
        125,
        0,
        true,
        6,
        1
    )
    buildings.push(Mine);

    const Mill = new Building(
        'Mill',
        <GiWindmill className='building-icon' />,
        600,
        0,
        true,
        20,
        1
    );
    buildings.push(Mill);

    const Blacksmith = new Building(
        'Blacksmith',
        <GiBlacksmith className='building-icon' />,
        1800,
        0,
        true,
        65,
        1
    );
    buildings.push(Blacksmith);
    
    const Cathedral = new Building(
        'Cathedral',
        <GiChurch className='building-icon' />,
        5600,
        0,
        true,
        200,
        1
    );
    buildings.push(Cathedral);

    const Temple = new Building(
        'Temple',
        <GiEgyptianTemple className='building-icon' />,
        38000,
        0,
        true,
        650,
        1
    );
    buildings.push(Temple);
    
    const Castle = new Building(
        'Castle',
        <GiCastle className='building-icon' />,
        442000,
        0,
        true,
        2000,
        1
    );
    buildings.push(Castle);



    return buildings;
}