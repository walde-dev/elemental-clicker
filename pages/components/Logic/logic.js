import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Logic() {



}


export function abbreviateNumber(value) {
    let newValue = value;
    let precision = 1;
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
    newValue = parseFloat(newValue);


    newValue += suffixes[suffixNum];

    return newValue;
}


