import {useReducer} from "react";
import * as React from "react";

enum ActionType {
    IDIE,
    START,
    END,
    CLEAR,
}

/**
 * 定義你的狀態要回傳的東西
 */
interface CounterState {
    type: ActionType;
    element: React.ReactElement;
}

// 傳遞到 reducer 的行為物件
interface IAction {
    type: ActionType;
}

/**
 * useReducer 第一個參數 一定要寫回傳
 * 一定要給兩個參數
 * 回傳的一定要跟第二個參數給的物件一樣
 * @param beforeState - 上個狀態
 * @param afterState - 新的狀態
 */
function changeState(beforeState: CounterState,afterState:IAction): CounterState {
    console.log(beforeState,afterState);
    switch (afterState.type) {
        case ActionType.IDIE:
            return {type: ActionType.IDIE,element: <>待機</>};
        case ActionType.START:
            return {type: ActionType.START,element: <>開始摟</>};
        case ActionType.END:
            return {type: ActionType.END,element: <>結束摟</>};
        case ActionType.CLEAR:
            return {type: ActionType.CLEAR,element: <>清除</>};
        default:
            return beforeState;
    }
}

/**
 * 更新新狀態
 * @param state
 * @param changeState
 */
function switchState(state: ActionType, changeState: React.Dispatch<IAction>) {
    switch (state) {
        case ActionType.IDIE:
            changeState({type: ActionType.START});
            break;
        case ActionType.START:
            changeState({type: ActionType.END});
            break;
        case ActionType.END:
            changeState({type: ActionType.CLEAR});
            break;
        case ActionType.CLEAR:
            changeState({type: ActionType.IDIE});
            break;
        default:
            console.log(`${state}`);
    }
}


export function DemoUseReducer() {

    const [state, setState] = useReducer(changeState, {type:ActionType.IDIE,element: <>待機</>} as CounterState);

    return (
        <main>
            <h1>UseReducer</h1>
            <p>{state.element}</p>
            <button onClick={() => {
                switchState(state.type,setState);
            }}>狀態切換</button>
        </main>
    );
}
