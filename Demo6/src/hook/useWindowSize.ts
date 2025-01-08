import {useEffect, useState} from "react";


interface IWindowSize {
    /**
     * 更新頻率
     */
    throttleDuration: number,
}

/**
 * 自定義 hook
 */
export default function useWindowSize(setting: IWindowSize) {
    const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        }
    )
    useEffect(() => {

        let id: number | null = null;
        const handleResize = () => {
            if (!id) {
                console.log('resize');
                id = setTimeout(() => {
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight,
                    });
                    id = null;
                }, setting.throttleDuration);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            clearTimeout(id as number);
            window.removeEventListener('resize', handleResize);
        };
    }, [setting.throttleDuration]);
    return windowSize;
}