import './App.scss'
import * as React from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Register} from "./Page/Register/Register.tsx";
import {Home} from "./Page/Home/Home.tsx";
import {Register2} from "./Page/Register/Register2.tsx";
import {Register3} from "./Page/Register/Register3.tsx";

function App() {
    return <main>
        <nav className="topBar">
            <div className="topBarButton">
                <Link to="/">首頁</Link>
            </div>
            <div className="topBarButton">
                <Link to="/register">硬幹寫法 註冊</Link>
            </div>
            <div className="topBarButton">
                <Link to="/register2">useState 物件傳遞版 註冊</Link>
            </div>
            <div className="topBarButton">
                <Link to="/register3">模組化 註冊表</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/register2" element={<Register2/>}/>
            <Route path="/register3" element={<Register3/>}/>
        </Routes>
    </main>
}

export default App
