import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Logic() {



}

export function Buy(upgrade, payload) {

    const { dispatch } = payload
    const { player } = payload;
    const { buildings } = payload;

    if (player.coins < upgrade.cost) return;
    dispatch(setCoins(player.coins - upgrade.cost))
    dispatch(buyUpgrade(upgrade))

    switch (upgrade.type) {

        /* Building Tiers */
        case 'buildingTier':
            Object.entries(buildings).map(building => {
                if (building[1].name.toLowerCase() !== upgrade.building) return;
                dispatch(addToMultiplier({ name: building[1].name, amount: upgrade.multiplier }));
            })
            break;

        case 'clicks':
            if (upgrade.bonusType === 'additive') {
                dispatch(updateCoinsPerClick(player.coinsPerClick + upgrade.multiplier));
            }

        default:
            break;
    }

}

export function abbreviateNumber(value) {
    let newValue = value;
    let precision = 0;
    if (newValue >= 1000) {
        precision = 2;
    }
    const suffixes = [
        "", "K", "M", "B", "T",
        "Qa", "Qi", "Sx", "Sp",
        "Oc", "No", "Dc", "Ud",
        "Dd", "Td", "Qad", "Qid",
        "Sxd", "Spd", "Ocd", "Nod"
    ];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }


    newValue = newValue.toFixed(precision);


    newValue += suffixes[suffixNum];

    return newValue;
}


