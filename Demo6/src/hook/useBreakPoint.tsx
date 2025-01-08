import {useEffect, useState} from "react";

interface IBreakPoint {
    name: string;
    width: number;
}

const breakPoints: IBreakPoint[] = [
    {name: 'mobile', width: 480},
    {name: 'tablet', width: 768},
    {name: 'laptop', width: 1024},
    {name: 'desktop', width: 1440},
];


/**
 * 獲取當前字適應狀態
 * @param windowWidth
 */
function getBreakPoint(windowWidth: number): IBreakPoint {
    let nowBreakPoint: IBreakPoint | null = null;
    for (let breakPoint of breakPoints) {
        if (windowWidth <= breakPoint.width) {
            nowBreakPoint = breakPoint;
            break;
        }
    }

    if (nowBreakPoint == null) {
        nowBreakPoint = {
            name: 'unknown',
            width: -1,
        }
    }
    return nowBreakPoint;
}

/**
 * 監聽當前客戶瀏覽器尺寸
 * @param windowWidth
 */
export default function useBreakPoint(windowWidth: number) {
    const [currentBreakPoint, setCurrentBreakPoint] = useState<string>(getBreakPoint(windowWidth).name);
    //監聽
    useEffect(() => {
        setCurrentBreakPoint(getBreakPoint(windowWidth).name);
    }, [windowWidth])

    return currentBreakPoint;

}