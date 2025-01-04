import './Register.scss';
import React, {Fragment} from "react";

interface IRegister {
    username: string;
    password: string;
    repeatPassword: string;
    gander: string;
    occupation: string;
    hobby: string[];
}

interface IErrorMessage {
    username: string;
    password: string;
    repeatPassword: string;
}

interface IErrorMessageEvent {
    username: (data: IRegister) => string;
    password: (data: IRegister) => string;
    repeatPassword: (data: IRegister) => string;
}

interface IGender {
    value: string;
    label: string;
}

interface IHobby {
    id: string;
    label: string;
}

interface IUserMessage {
    id: string;
    label: string;
    type: string;
}

function handleInput(
    data: IRegister, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    callback: (data: IRegister) => void,
    error?: IErrorMessageEvent,
    errorData?: IErrorMessage,
    setErrorData?: (data: IErrorMessage) => void) {

    const newData = {
        ...data,
        [e.target.name]: e.currentTarget.value
    }

    callback(newData);
    if (error == undefined || errorData == undefined || setErrorData == undefined) return;
    const errorMessage: string = (error[e.target.name as keyof IErrorMessageEvent] && error[e.target.name as keyof IErrorMessageEvent](newData)) || '';
    if (errorMessage.trim()) {
        setErrorData({
            ...errorData,
            [e.target.name]: errorMessage
        })
    }else {
        setErrorData({
            ...errorData,
            [e.target.name]: ""
        })
    }
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

function handleFormSubmit(userData: IRegister,
                          e: React.FormEvent<HTMLFormElement>,
                          error: IErrorMessageEvent,
                          errorData: IErrorMessage,
                          setErrorData: (data: IErrorMessage) => void) {
    e.preventDefault()// 阻止表單提交後的重新加載網頁
    let errorMessage :string = "";

    for (let ruleKey of Object.keys(error)) {
        errorMessage = error[ruleKey as keyof IErrorMessageEvent](userData) ;
        if (errorMessage.trim()) {
            setErrorData({
                ...errorData,
                [ruleKey]: errorMessage
            })
            return;
        }else {
            setErrorData({
                ...errorData,
                [ruleKey]: ""
            })
        }
    }
    console.log(userData);
}


function handleResetSubmit(e: React.FormEvent<HTMLFormElement>, setRegister: (registerData: IRegister) => void) {
    setRegister({
        username: '',
        password: '',
        repeatPassword: '',
        gander: '',
        occupation: '',
        hobby: new Array<string>(),
    })
}

function checkUserName(register: IRegister): string {
    if (!/^[a-zA-Z0-9]{8,15}$/.test(register.username)) {
        return "輸入值必須包含大小寫字母與數字，且至少 8 個字符 且小於15！";
    }
    return "";
}

function checkPassword(register: IRegister): string {
    if (!/^[a-zA-Z0-9]{8,15}$/.test(register.password)) {
        return "密碼輸入值必須包含大小寫字母與數字，且至少 8 個字符 且小於15！";
    }
    return "";
}

function checkRepeatPassword(register: IRegister): string {
    if (register.password !== register.repeatPassword) {
        return "驗證密碼與密碼不相等";
    }
    return "";
}

/**
 * 模組化
 * @constructor
 */
export function Register3() {
    const [registerData, setRegister] = React.useState<IRegister>({
        username: '',
        password: '',
        repeatPassword: '',
        gander: '',
        occupation: '',
        hobby: []
    });


    const [errorData, setErrorData] = React.useState<IErrorMessage>(
        {
            username: "",
            password: "",
            repeatPassword: "",
        }
    )

    const errorMessageEvent: IErrorMessageEvent = ({
        username: checkUserName,
        password: checkPassword,
        repeatPassword: checkRepeatPassword,
    });

    const gender: IGender[] = [
        {value: "male", label: "男"},
        {value: "female", label: "女"},
    ]

    const hobby: IHobby[] = [
        {id: "programming", label: "coding"},
        {id: "drawing", label: "繪圖"},
        {id: "music", label: "音樂"},
    ]

    const userMessage: IUserMessage[] = [
        {
            id: "username", label: "用戶名", type: 'text'
        },
        {
            id: "password", label: "密碼", type: 'password'
        },
        {
            id: "repeatPassword", label: "重複輸入密碼", type: 'repeatPassword'
        },
    ]
    return (
        <div>
            <h1>用戶註冊 優化 useState</h1>
            <form
                onSubmit={(e) => {
                    // 監聽整個表單數據
                    handleFormSubmit(
                        registerData,
                        e,
                        errorMessageEvent,
                        errorData,
                        setErrorData,
                    );
                }}
                onReset={(e) => {
                    handleResetSubmit(e, setRegister);
                }}
            >
                {/*基本資料*/}
                <fieldset>
                    <legend>基本資料</legend>
                    {userMessage.map((message, index) => (
                        <div key={index}>
                            <label htmlFor={message.id}>{message.label}</label>
                            <input type={message.type}
                                   name={message.id}
                                   onChange={(e) => {
                                       handleInput(
                                           registerData,
                                           e,
                                           setRegister,
                                           errorMessageEvent,
                                           errorData,
                                           setErrorData,
                                       )
                                   }}
                            />
                            <span>{errorData[message.id as keyof IErrorMessage]}</span>
                        </div>
                    ))}
                    <div>
                        <label htmlFor="gander">性別</label>
                        {gender.map((gender, index) => (
                            <Fragment key={index}>
                                <label htmlFor={gender.value}>{gender.label}</label>
                                <input type="radio"
                                       id={gender.value}
                                       name="gander"
                                       value={gender.label}
                                       checked={registerData.gander === gender.label}
                                       onChange={(e) => {
                                           handleInput(registerData, e, setRegister)
                                       }}
                                />
                            </Fragment>
                        ))}
                    </div>
                </fieldset>
                {/*職業*/}
                <fieldset>
                    <legend>職業</legend>
                    <div>
                        <select id="occupation"
                                name="occupation"
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
                {/*興趣*/}
                <fieldset>
                    <legend>興趣</legend>
                    <div>
                        {hobby.map((hobby, index) => (
                            <Fragment key={index}>
                                <label htmlFor={hobby.id}>{hobby.label}</label>
                                <input type="checkbox"
                                       id={hobby.id}
                                       name="hobby"
                                       value={hobby.id}
                                       checked={registerData.hobby.indexOf(hobby.id) !== -1}
                                       onChange={(e) => {
                                           handleHobbyData(registerData, e, setRegister);
                                       }}
                                />
                            </Fragment>
                        ))}
                    </div>
                </fieldset>

                <div>
                    <button type="submit">提交</button>
                    <button type="reset">重置</button>
                </div>
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
