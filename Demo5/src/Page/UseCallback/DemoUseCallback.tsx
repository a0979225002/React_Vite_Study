import {Dispatch, SetStateAction, useCallback, useEffect, useState} from "react";

/**
 *
 * @param count
 * @param setCount
 */
function updateCount(count: number, setCount: Dispatch<SetStateAction<number>>) {
    return useCallback(() => {
        setCount((pre) => pre + 1);
    }, [])
}


export function DemoUseCallback() {
    const [count, setCount] = useState<number>(0)
    const update = updateCount(count, setCount);

    useEffect(() => {
        const timer = setInterval(update, 1000);
        console.log(`執行 ${timer} : ${count}`)
        return () => {
            clearInterval(timer);
            console.log(`清除 : ${timer}`)
        }
    }, [update]);

    // updateDateToSet(updateDate);
    return (
        <main className="container">
            <h1>{count}</h1>
        </main>
    )
}
