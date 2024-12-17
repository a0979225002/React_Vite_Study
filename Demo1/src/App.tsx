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

function GetUserClick(id: number) {
    return (e: React.MouseEvent) => {
        let he = e.target as HTMLElement;
        if (!he) return;
        console.log(id);
        let data = he.textContent?.trim();
        if (!data) return;
        console.log(data);
    }
}

/**
 * 獲取玩家點擊的文字
 * @param data
 */
/**
 * 獲取玩家點擊的文字
 * @param data
 */
function getUsers(data: User[]): React.ReactElement {
    return <div>
        {/*&& 單純判斷 只有 if 沒有 else 的概念*/}
        {data.length > 0 && data.map(user => (
            <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: "center",
                flexDirection: "row",// 改成左右排列,
                marginBottom: "20px", // 分隔每條記錄的下間距
                padding: "10px", // 增加內容的內邊距
                border: "1px solid #ccc", // 添加邊框讓每條記錄更分明
                borderRadius: "8px", // 邊框圓角
                backgroundColor: "#2f5152",
            }} key={user.id} onClick={GetUserClick(user.id)}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "200px",
                    height: "500px",
                    backgroundColor: "#383838",
                    marginRight: "20px" //// 添加右側間距讓文字不緊挨著圖片
                }}>
                    <img style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px 10px", // 設置圓形效果
                        border: "1px solid #ccc", // 添加邊框讓每條記錄更分明
                        overflow: "hidden",
                        objectFit: "cover"
                    }
                    }
                         src={"https://gbf.wiki/images/6/66/Npc_zoom_3040169000_01.png"}
                         alt={"https://gbf.wiki/images/6/66/Npc_zoom_3040169000_01.png"}/>
                </div>
                <div style={{flex: 1}}> {/* 文字部分撐滿剩餘空間 */}
                    <h2>{user.author.name}</h2>
                    <div>
                        <div><p>{user.content}</p></div>
                        <hr/>
                        <p className={"userData"}>{user.publishDate}</p>
                    </div>
                </div>
            </div>

        ))
        }
    </div>
}

/**
 *
 * @constructor
 */
function AddTextAreaComponent(): React.ReactElement {
    let isLock: boolean = false;
    //處理多語系輸入問題
    return <textarea onCompositionEnd={(e) => {
        isLock = onCompositionEnd(e)
    }}
                     onCompositionStart={() => {
                         isLock = onCompositionStart()
                     }}
                     onInput={(e) => {
                         onInput(isLock, e)
                     }}
                     id="content"
                     placeholder="寫點什模"
                     cols={30}
                     rows={5}
                     style={{display: 'block', margin: '0 auto 20px'}} // 居中並下面留出空白
    ></textarea>
}

/**
 * 不管輸入啥都會觸發
 * @param isLock
 * @param e
 */
function onInput(isLock: boolean, e: React.FormEvent<HTMLTextAreaElement>) {
    if (isLock) {
        return
    }
    isLock = false;
    console.log(e.currentTarget.value);
}

/**
 * 當用戶輸入段落時觸發
 * @param e
 */
function onCompositionEnd(e: React.FormEvent<HTMLTextAreaElement>): boolean {
    console.log(e.currentTarget.value);
    return false;
}

/**
 * 當用戶使用拼音法開始時觸發
 */
function onCompositionStart(): boolean {
    return true;
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
                display: "flex",
                flexDirection: "row",

            }}>
                <div style={{
                    justifyContent: "center",
                    padding: "0 0px",  // 左右留空白
                    marginBottom: "20px",  // 在此區塊下面留出空白
                    backgroundColor: hexColor,
                    marginRight: "20px"
                }}>
                    {getUsers(data)}
                    {getEmptyUsers(emptyData)}
                </div>
                <div>
                    {AddTextAreaComponent()}
                    <button style={{display: 'block', margin: '0 auto'}}>發布</button>
                </div>

            </div>


        </main>
    );
}


export default App;