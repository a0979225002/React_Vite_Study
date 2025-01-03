import './App.scss'
import * as React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Register} from "./Page/Register.tsx";
import {Home} from "./Page/Home.tsx";

function App() {
    return <main>
        <nav className="topBar">
            <div className="topBarButton">
                <Link  to="/">首頁</Link>
            </div>
            <div className="topBarButton">
                <Link to="/register">新分頁</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </main>
}

export default App
