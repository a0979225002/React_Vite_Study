import React from 'react';
import './style.scss';

export interface IUser {
    id: number;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    publishDate: string;
}

/**
 * 只能這樣寫如果想寫傳進來的參數是介面的話
 */
interface IUserProps {
    itemData: IUser;
    itemData2: IUser;
    children?: React.ReactNode; // 添加 children 支持
}

/**
 * React 只能傳遞一個 props 參數 如果樣傳兩個需要這樣寫
 * @param itemData
 * @param itemData2
 * @param children
 * @constructor
 */
export default function PostListItem({itemData,itemData2,children}: IUserProps): React.ReactElement {
    itemData = itemData2;
    return <div className={"post-list-item"}>
        <div className={"post"} key={itemData.id}>
            <div className={"post-avatar"}>
                <img src={itemData.author.avatar} alt={itemData.author.name}/>
            </div>
            <div className={"post-content-wrapper"}>
                <h1>{itemData.author.name}</h1>
                <div className={"post-content"}>
                    <p>{itemData.content}</p>
                    <p>{itemData.publishDate}</p>
                </div>
            </div>
        </div>
        <div className={"edit-and-delete"} >{children}</div>
        <hr/>
    </div>
}
