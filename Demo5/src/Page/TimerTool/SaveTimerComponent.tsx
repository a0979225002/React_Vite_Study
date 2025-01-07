import {Dispatch, useState} from "react";
import {ITimerAction, TimerType} from "./TimerToolComponent.tsx";

interface ITimerToolComponent {

    /**
     * 要更新的狀態
     */
    timerState: TimerType;


    /**
     * 狀態改變的回調
     */
    updateTimeActon?: Dispatch<ITimerAction>;
}


export function SaveTimerComponent(state: ITimerToolComponent) {
    const [list, setList] = useState<string[]>([])

    if(state.timerState === TimerType.SAVE){
        state.updateTimeActon?.({type: TimerType.START});
    }

    return (
        <></>
    );
}
