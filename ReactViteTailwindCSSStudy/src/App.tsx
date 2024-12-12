import './App.scss'
import React, {useEffect, useState} from "react";
import userData from './UserData.json' with {type: 'json'};

interface User {
    id: number;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    publishDate: string;
}

export function getUsers(data: User[]): React.ReactElement {
    return <div>
        {/*&& 單純判斷 只有 if 沒有 else 的概念*/}
        {data.length > 0 && data.map(user => (
            <div style={{display: "flex",justifyContent:'center',alignItems: "center",
                flexDirection: "column"}} key={user.id}>
                <div style={{width: "300px", height: "500px", backgroundColor: "#80135d"}}>
                    <img style={{width:"100%" ,height:"100%",overflow:"hidden",objectFit:"cover"}}
                        src={"https://gbf.wiki/images/6/66/Npc_zoom_3040169000_01.png"}
                         alt={"https://gbf.wiki/images/6/66/Npc_zoom_3040169000_01.png"}/>
                </div>

                <div><p>{user.content}</p></div>
                <div>
                    <h2>{user.author.name}</h2>
                    <p style={{marginBottom: "40px"}}>{user.publishDate}</p>
                </div>
            </div>
        ))}</div>
}

function getEmptyUsers(data: User[]): React.ReactElement {
    return <div>
        {/*&& 單純判斷 只有 if 沒有 else 的概念*/}
        {data.length > 0 ? data.map(user => (
            <div key={user.id}>
                <img src={user.author.avatar} alt={""}/>
                <div><p>{user.content}</p></div>
                <div>
                    <h2>{user.author.name}</h2>
                    <p style={{marginBottom: "40px"}}>{user.publishDate}</p>
                </div>
            </div>
        )) : "data is empty"}</div>
}

function App() {
    const title: string = "哈摟你好";
    const [hexColor] = useState("#1d8013");
    const [data, setUsers] = useState<User[]>([]);
    const [emptyData] = useState<User[]>([]);
    useEffect(() => {
        setUsers(userData as User[]);
    }, []);
    return (
        <main>
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>{title}</h1>
            <p>htmlFor="content 透過 ID 綁定點擊後移動的 component 位置</p>
            <label htmlFor="content" style={{
                color: useState("#a2b0ff")[0],
                display: 'block',
                marginBottom: '50px'
            }}>點擊label會移動到 textarea</label>

            <div style={{
                justifyContent: "center",
                height: "200vh",
                padding: "0 20px",  // 左右留空白
                marginBottom: "40px",  // 在此區塊下面留出空白
                backgroundColor: hexColor,
            }}>
                {getUsers(data)}
                {getEmptyUsers(emptyData)}
            </div>


            <textarea
                id="content"
                placeholder="寫點什模"
                cols={30}
                rows={5}
                style={{display: 'block', margin: '0 auto 20px'}} // 居中並下面留出空白
            ></textarea>

            <button style={{display: 'block', margin: '0 auto'}}>發布</button>

        </main>
    );
}

export default App;