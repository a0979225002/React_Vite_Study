import './Register.scss';
import React from "react";

interface IRegister {
    username: string;
    password: string;
    repeatPassword: string;
    gander: string;
    occupation: string;
    hobby: string[];
}

function handleInput(data: IRegister, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, callback: (data: IRegister) => void) {

    callback(
        {
            ...data,
            [e.target.id]: e.currentTarget.value
        }
    );
}

function handleHobbyData(data: IRegister, e: React.ChangeEvent<HTMLInputElement>, updateData: (data: IRegister) => void) {
    const checked = e.target.checked;
    const value = e.currentTarget.value;
    if (checked && data.hobby.indexOf(value) === -1) {

        updateData({
            ...data,
            hobby: [...data.hobby, value]
        });
    }

    if (checked == false && data.hobby.indexOf(value) !== -1) {
        data.hobby?.splice(data.hobby?.indexOf(value), 1);
        updateData({
            ...data,
            hobby: [...data.hobby]
        });
    }
}

/**
 * 優化寫法
 * @constructor
 */
export function Register2() {
    const [registerData, setRegister] = React.useState<IRegister>({
        username: '',
        password: '',
        repeatPassword: '',
        gander: '',
        occupation: '',
        hobby: []
    });
    // const [username, setUsername] = React.useState('');
    return (
        <div>
            <h1>用戶註冊 優化 useState</h1>
            <form>
                <fieldset>
                    <legend>基本資料</legend>
                    <div>
                        <label htmlFor="username">用戶名</label>
                        <input type="text"
                               id="username"
                               onChange={(e) => {
                                   handleInput(registerData, e, setRegister)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">密碼</label>
                        <input type="password"
                               id="password"
                               onChange={(e) => {
                                   handleInput(registerData, e, setRegister)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">重複輸入密碼</label>
                        <input type="repeatPassword" id="repeatPassword"
                               onChange={(e) => {
                                   handleInput(registerData, e, setRegister)
                               }}
                        />
                    </div>
                    <div>
                        <label htmlFor="gander">性別</label>
                        <input type="radio"
                               id="male" name="gander"
                               value="男"
                               checked={registerData.gander === '男'}
                               onChange={(e) => {
                                   handleInput(registerData, e, setRegister)
                               }}
                        />
                        <label htmlFor="male">男</label>
                        <input type="radio"
                               id="famale"
                               name="gander"
                               value="女"
                               checked={registerData.gander === '女'}
                               onChange={(e) => {
                                   handleInput(registerData, e, setRegister)
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
                                    handleInput(registerData, e, setRegister)
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
                                   handleHobbyData(registerData, e, setRegister);
                               }}
                        />
                        <label htmlFor="programming">coding</label>
                        <input type="checkbox"
                               id="drawing"
                               name="hobby"
                               value="drawing"
                               onChange={(e) => {
                                   handleHobbyData(registerData, e, setRegister);
                               }}
                        />
                        <label htmlFor="drawing">繪圖</label>
                        <input type="checkbox"
                               id="music"
                               name="hobby"
                               value="music"
                               onChange={(e) => {
                                   handleHobbyData(registerData, e, setRegister);
                               }}
                        />
                        <label htmlFor="music">音樂</label>
                    </div>
                </fieldset>
            </form>
            <ul>
                <li>用戶名 : {registerData.username}</li>
                <li>密碼 : {registerData.password}</li>
                <li>重複密碼 : {registerData.repeatPassword}</li>
                <li>性別 : {registerData.gander}</li>
                <li>職業 : {registerData.occupation}</li>
                <li>興趣: {registerData.hobby.join(" / ")}</li>
            </ul>
        </div>
    );
}
