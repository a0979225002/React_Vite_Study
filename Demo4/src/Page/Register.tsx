import './Register.scss';
export function Register() {
    return (
        <div>
            <h1>用戶註冊</h1>
            <form>
                <fieldset>
                    <legend>基本資料</legend>
                    <div>
                        <label htmlFor="username">用戶名</label>
                        <input type="text" id="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">密碼</label>
                        <input type="password" id="password"/>
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">重複輸入密碼</label>
                        <input type="repeatPassword" id="repeatPassword"/>
                    </div>
                    <div>
                        <label htmlFor="gander">性別</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>基本資料</legend>
                    <div>
                        <label htmlFor="username">用戶名</label>
                        <input type="text" id="username"/>
                    </div>
                    <div>
                        <label htmlFor="password">密碼</label>
                        <input type="password" id="password"/>
                    </div>
                    <div>
                        <label htmlFor="repeatPassword">重複輸入密碼</label>
                        <input type="repeatPassword" id="repeatPassword"/>
                    </div>
                    <div>
                        <label htmlFor="gander">性別</label>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
