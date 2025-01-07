import {Dispatch, ReactElement, useEffect, useReducer, useState} from "react";
import TimerButtonComponent from "./TimerButtonComponet.tsx";
import TimeComponent from "./TimeComponent.tsx";

/**
 *
 */
export enum TimerType {
    IDEL,
    START,
    STOP,
    CLEAR,
    SAVE,
}

export interface ITimerAction {
    type: TimerType;
}


/**
 * 檢查當前狀態,要做的事
 * @param beforeState
 * @param afterState
 */
function checkTimerState(beforeState: ITimerAction, afterState: ITimerAction): ITimerAction {
    return afterState;
}


/**
 *
 */
function timerAction(timer: number, setTimer: Dispatch<number>, timerState: TimerType) {
    let timerID: number;
    useEffect(() => {
        if (timerState === TimerType.CLEAR) {
            setTimer(0);
            return;
        }
        if (timerState !== TimerType.START) return;
        timerID = setInterval(() => {
            setTimer(timer++);
        }, 10);
        return () => {
            clearInterval(timerID);
        }
    }, [timerState]);

}


export function TimerToolComponent() {
    const [timer, setTimer] = useState<number>(0);
    const [timerState, setTimerState] = useReducer(checkTimerState, {type: TimerType.IDEL});   //當前timer 狀態
    timerAction(timer, setTimer, timerState.type);
    return (
        <main>
            <h1>TimerTool</h1>
            <TimeComponent time={timer}/>
            <div>
                <TimerButtonComponent timerState={timerState.type} updateTimeActon={setTimerState}
                                      canChangeText={true}/>
                <TimerButtonComponent timerState={TimerType.SAVE} canChangeText={false}/>
                <TimerButtonComponent timerState={TimerType.CLEAR} canChangeText={false}
                                      updateTimeActon={setTimerState}/>
            </div>
        </main>
    );
}
