import {useEffect, useState} from "react";
import useWindowSize from "./hook/useWindowSize.ts";
import './App.scss';
import useBreakPoint from "./hook/useBreakPoint.tsx";

function App() {
    const windowSize = useWindowSize({throttleDuration: 500});
    const breakPoint = useBreakPoint(windowSize.width);
    return (
        <main className="container">
            <div>
                <h1>Width:{windowSize.width}</h1>
                <h1>Height:{windowSize.height}</h1>
            </div>

            <div>
                <h1>BreakPoint:{breakPoint}</h1>
            </div>
        </main>
    )
}

export default App
