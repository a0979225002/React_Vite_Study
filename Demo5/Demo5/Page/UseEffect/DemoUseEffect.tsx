import {useEffect, useState} from 'react'


function updateDateToSet(updateDate: (date: Date) => void): number {
    return setInterval(() => {
        updateDate(new Date());
    }, 1000);
    //此為副作用,React 內部會無限執行此方法 造成內存洩漏
    // console.log(id);
}


function updateDraw(testNum: number, test: (n: number) => void) {
    test(testNum + 1);
}

function setDateTime(updateTime: (date: Date) => void) {
    console.log("開始校準");
    updateTime(new Date());
}

/**
 * 要記住 react 機制 只要更改物件讓他渲染頁面一次 這邊的方法就會執行一次 要小心內存洩漏
 * useEffect
 * 第二個參數 : 不傳的話會等於無作用,每次重新渲染畫面會在執行一次
 * 傳死的參數(空陣列) 就會只執行一次,不管頁面如何渲染
 * 可以傳動態參數改變時，每次動態參數改變時,才會執行 useEffect
 * @constructor
 */
export function DemoUseEffect() {
    const [date, updateDate] = useState<Date>(new Date())
    const [refresh, setRefresh] = useState<number>(0);

    //只在組建第一次家載時執行一次
    useEffect(() => {
        const id = updateDateToSet(updateDate);
        console.log("測試當前ID", id);

        //會在第二個參數更動前執行,只要第二個參數[refresh] 沒更新 這裡的return就不會執行
        return () => {
            clearInterval(id);
            console.log(`清除的ID : ${id}`)
        }

    }, [refresh]);


    //效準
    useEffect(() => {
        setDateTime(updateDate);
    }, [refresh]);


    // updateDateToSet(updateDate);
    return (
        <main className="container">
            <h1>{date.toLocaleString("zh-TW")}</h1>
            <button onClick={() => updateDraw(refresh, setRefresh)}>效準</button>
            <h1>{refresh}</h1>
        </main>
    )
}
