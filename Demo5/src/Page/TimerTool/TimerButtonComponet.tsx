import {Dispatch, ReactElement, SetStateAction, useEffect, useState} from "react";
import {ITimerAction, TimerType} from "./TimerToolComponent.tsx";

interface ITimerToolComponent {

    /**
     * 要更新的狀態
     */
    timerState: TimerType;

    /**
     * 是否更改按鈕文字
     */
    canChangeText: boolean;

    /**
     * 狀態改變的回調
     */
    updateTimeActon?: Dispatch<ITimerAction>;

}

/**
 * 更新當前狀態
 * @param t
 * @param setButtonText
 */
function updateTimerState(t: ITimerToolComponent, setButtonText: Dispatch<SetStateAction<string>>) {
    switch (t.timerState) {
        case TimerType.IDEL:
            t.updateTimeActon?.({type: TimerType.START});
            if (!t.canChangeText) break;
            setButtonText(getButtonText(TimerType.START));
            break;
        case TimerType.START:
            t.updateTimeActon?.({type: TimerType.STOP});
            if (!t.canChangeText) break;
            setButtonText(getButtonText(TimerType.STOP));
            break;
        case TimerType.STOP:
            t.updateTimeActon?.({type: TimerType.START});
            if (!t.canChangeText) break;
            setButtonText(getButtonText(TimerType.START));
            break;
        case TimerType.CLEAR:
            t.updateTimeActon?.({type: TimerType.IDEL});
            if (!t.canChangeText) break;
            setButtonText(getButtonText(TimerType.IDEL));
            break;
    }
}

function getButtonText(state: TimerType): string {
    switch (state) {
        case TimerType.IDEL:
            return "開始";
        case TimerType.START:
            return "暫停";
        case TimerType.STOP:
            return "開始";
        case TimerType.CLEAR:
            return "清除";
        case TimerType.SAVE:
            return "保存";
    }
}


class Class {
    constructor() {
    }
}


/**
 * 按鈕組件
 * @param stateProp
 * @constructor
 */
export default function TimerButtonComponent(stateProp: ITimerToolComponent): ReactElement {
    const [buttonText, setButtonText] = useState<string>(getButtonText(stateProp.timerState));
    if (stateProp.updateTimeActon !== undefined) {
        // 使用 useEffect 監聽 timerState 的變化，並更新 buttonText
        useEffect(() => {
            setButtonText(getButtonText(stateProp.timerState));
        }, [stateProp.timerState]);
    }
    return <button
        onClick={(e) => updateTimerState(stateProp, setButtonText)}>
        {buttonText}
    </button>
}