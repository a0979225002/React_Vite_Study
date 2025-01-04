import './Register.scss';
import React from "react";

function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, callback: (data: string) => void) {
    callback(e.currentTarget.value);
}

function handleHobbyData(happy: string[], e: React.ChangeEvent<HTMLInputElement>, updateData: (data: string[]) => void) {
    const checked = e.target.checked;
    const value = e.currentTarget.value;
    if (checked && happy.indexOf(value) === -1) {
        updateData([...happy, value]);
    }

    if (checked == false && happy.indexOf(value) !== -1) {
        happy.splice(happy.indexOf(value), 1);
        updateData([...happy]);
    }

}

export function Register() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [gander, setGander] = React.useState('');
    const [occupation, setOccupation] = React.useState('');
    const [hobby, setHobby] = React.useState<string[]>([]);

    // const [username, setUsername] = React.useState('');
    return (
        <div>
            <h1>用戶註冊</h1>
            <form>
                <fieldset>
                    <legend>基本資料</legend>
                    <div>
                        <label htmlFor="username">用戶名</label>
                        <input type="text"
                               id="username"
                               onChange={(e) => {
                                   handleInput(e, setUsername)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">密碼</label>
                        <input type="password"
                               id="password"
                               onChange={(e) => {
                                   handleInput(e, setPassword)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">重複輸入密碼</label>
                        <input type="repeatPassword" id="repeatPassword"
                               onChange={(e) => {
                                   handleInput(e, setRepeatPassword)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="gander">性別</label>
                        <input type="radio"
                               id="male" name="gander"
                               value="男"
                               checked={gander === '男'}
                               onChange={(e) => {
                                   handleInput(e, setGander)
                               }}
                        />
                        <label htmlFor="male">男</label>
                        <input type="radio"
                               id="famale"
                               name="gander"
                               value="女"
                               checked={gander === '女'}
                               onChange={(e) => {
                                   handleInput(e, setGander)
                               }}
                        />
                        <label htmlFor="famale">女</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>職業</legend>
                    <div>
                        <select id="occupation"
                                onChange={(e) => {
                                    handleInput(e, setOccupation);
                                }}
                        >
                            <option value="">請選擇</option>
                            <option value="frontend">前端</option>
                            <option value="backend">後端</option>
                            <option value="fullstack">全端</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>興趣</legend>
                    <div>
                        <input type="checkbox"
                               id="programming"
                               name="hobby"
                               value="programming"
                               onChange={(e) => {
                                   handleHobbyData(hobby, e, setHobby);
                               }}
                        />
                        <label htmlFor="programming">coding</label>
                        <input type="checkbox"
                               id="drawing"
                               name="hobby"
                               value="drawing"
                               onChange={(e) => {
                                   handleHobbyData(hobby, e, setHobby);
                               }}
                        />
                        <label htmlFor="drawing">繪圖</label>
                        <input type="checkbox"
                               id="music"
                               name="hobby"
                               value="music"
                               onChange={(e) => {
                                   handleHobbyData(hobby, e, setHobby);
                               }}
                        />
                        <label htmlFor="music">音樂</label>
                    </div>
                </fieldset>
            </form>
            <ul>
                <li>用戶名 : {username}</li>
                <li>密碼 : {password}</li>
                <li>重複密碼 : {repeatPassword}</li>
                <li>性別 : {gander}</li>
                <li>職業 : {occupation}</li>
                <li>興趣: {hobby.join(" / ")}</li>
            </ul>
        </div>
    );
}
