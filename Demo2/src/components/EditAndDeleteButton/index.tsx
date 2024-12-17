import React from 'react';
import './style.scss';

/**
 * Renders a component with edit and delete buttons.
 *
 * @param {Object} props - The props for the component.
 * @param {Function} props.onEdit - A callback function to handle the edit action, which takes a string as an argument.
 * @return {React.ReactElement} The rendered React component.
 */
export default function EditAndDeleteButton({onEdit}: { onEdit: (s:string,e:React.MouseEvent) => void }): React.ReactElement {
    return (
        <p className="edit-and-delete-button">
            <button type={"submit"} onClick={(e: React.MouseEvent) => {
                handleLinkClick(e, onEdit)
            }}>編輯
            </button>
            <button>刪除</button>
        </p>
    )
}


function handleLinkClick(e: React.MouseEvent, onEdit: (s:string,e:React.MouseEvent) => void) {
    e.preventDefault(); //個組件有不同效果 比如禁止跳轉頁面,此處為禁止提交
    if (onEdit) {
        onEdit("點擊按鈕",e);
    }
}

