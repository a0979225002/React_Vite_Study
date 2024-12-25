import './App.css'
import {useState} from "react";


function App() {
    const [list, setCount] = useState([1, 2, 3, 4]);
    return (
        <div className="container">
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}
                        <button
                            style={{marginLeft: "20px"}}
                            onClick={() => onSetItemCountButtonClick(index, list, setCount)}>
                            加100
                        </button>
                        <button
                            style={{marginLeft: "20px"}}
                            onClick={() => onDestoryItemButtonClick(index, list, setCount)}>
                            刪除此項
                        </button>
                    </li>
                })}
            </ul>
            <button onClick={() => onAddCountButtonClick(list, setCount)}>增加</button>
        </div>
    )
}
function onDestoryItemButtonClick(index: number, list: number[], updateList: (list: number[]) => void) {
    let newList = [...list];
    newList.splice(index, 1);
    updateList(newList);
}

function onSetItemCountButtonClick(index: number, list: number[], updateList: (list: number[]) => void) {
    let newList = [...list];
    newList[index] = newList[index]+100;
    updateList(newList);
}

/**
 *
 * @param list
 * @param updateList
 */
function onAddCountButtonClick(list: number[], updateList: (list: number[]) => void) {
    let newList = [...list];
    let maxNumber = 0;
    for (let i = 0; i < newList.length; i++) {
        let random = Math.floor(Math.random() * (newList.length - 1));
        const temp = newList[i];
        newList[i] = newList[random];
        newList[random] = temp;
        if(temp > maxNumber) maxNumber = temp;
    }
    newList.push(maxNumber + 1);
    updateList(newList);
}

export default App
