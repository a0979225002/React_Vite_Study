import {Link, Route, Routes} from "react-router-dom";
import {DemoUseEffect} from "./Page/UseEffect/DemoUseEffect.tsx";
import {DemoUseReducer} from "./Page/UseReducer/DemoUseReducer.tsx";
import {DemoUseCallback} from "./Page/UseCallback/DemoUseCallback.tsx";
import './App.scss';
import {TimerToolComponent} from "./Page/TimerTool/TimerToolComponent.tsx";

function App() {
    return <main>
        <nav className="topBar">
            <div className="topBarButton">
                <Link to="/">useEffect</Link>
            </div>
            <div className="topBarButton">
                <Link to="/useReducer">useReducer</Link>
            </div>
            <div className="topBarButton">
                <Link to="/useCallback">useCallback</Link>
            </div>
            <div className="topBarButton">
                <Link to="/timerTool">timerTool</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<DemoUseEffect/>}/>
            <Route path="/UseReducer" element={<DemoUseReducer/>}/>
            <Route path="/UseCallback" element={<DemoUseCallback/>}/>
            <Route path="/TimerTool" element={<TimerToolComponent/>}/>
        </Routes>
    </main>

}

export default App
