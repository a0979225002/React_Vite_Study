import {ReactElement, useEffect} from "react";
import {TimerType} from "./TimerToolComponent.tsx";

interface ITimer {
    time: number;
}

/**
 * 顯示當前計時器
 * @param t : 當前計時
 * @constructor
 */
export default function TimeComponent(t: ITimer): ReactElement {
    let timeFormat = ``;
    if(t.time > 100) {
        console.log(t.time);
    }
    let days =
        [
            24 * 60 * 60 * 100,// 一天的毫秒數
            60 * 60 * 100, // 一小時的毫秒數
            60 * 100, // 一分鐘的毫秒數
            100,// 一秒鐘
            100,
        ];
    let newTime = t.time;

    for (let i = 0; i < days.length; i++) {
        let day: number;
        if (i == days.length - 1) {
            day =newTime % days[i]; //毫秒
        } else {
            day = Math.floor(newTime / days[i]);
            newTime= newTime % days[i];
        }
        if (day == 0) {
            timeFormat += `00`
        } else {
            if (day.toString().length == 1) {
                timeFormat += `0${day}`
            } else {
                timeFormat += `${day}`
            }
        }

        if (i == days.length - 1) continue;
        timeFormat += ` : `;
    }
    console.log(timeFormat);
    return <h1>{timeFormat}</h1>;
}