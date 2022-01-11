import { useState } from "react";

export default function Logic() {

}

export function abbreviateNumber(value) {
    console.log(value)
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
        console.log(newValue)
    }

    newValue = newValue.toFixed(precision);


    newValue += suffixes[suffixNum];
    console.log(newValue)

    return newValue;
}