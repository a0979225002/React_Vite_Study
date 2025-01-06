import {Link, Route, Routes} from "react-router-dom";
import {DemoUseEffect} from "../Page/UseEffect/DemoUseEffect.tsx";
import {DemoUseReducer} from "../Page/UseReducer/DemoUseReducer.tsx";
import './App.scss';

function App() {
    return <main>
        <nav className="topBar">
            <div className="topBarButton">
                <Link to="/">useEffect</Link>
            </div>
            <div className="topBarButton">
                <Link to="/useReducer">useReducer</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<DemoUseEffect/>}/>
            <Route path="/UseReducer" element={<DemoUseReducer/>}/>
        </Routes>
    </main>

}

export default App
