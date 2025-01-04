import PostListItem, {IUser} from "../../components/PostListItem";
import EditAndDeleteButton from "../../components/EditAndDeleteButton";
import * as React from "react";
import postListData from "../../Data/postListData.json";


function onCompositionStart(changeLock: (lock: boolean) => void) {
    changeLock(true);
}


function onInputEvent(e: React.FormEvent<HTMLTextAreaElement>, lockState: boolean, changeLock: (lock: boolean) => void, changeText: (t: string) => void) {
    if (lockState) {
        return
    }
    changeLock(false)
    console.log(e.currentTarget.value);
    changeText(e.currentTarget.value);
}

function onChangeEvent(e: React.FormEvent<HTMLTextAreaElement>, changeText: (t: string) => void) {
    changeText(e.currentTarget.value);
}

function onCompositionEndEvent(e: React.CompositionEvent<HTMLTextAreaElement>, changeLock: (lock: boolean) => void, changeText: (t: string) => void) {
    changeLock(false)
    console.log(e.currentTarget.value);
    changeText(e.currentTarget.value);
}

function handleAddNewCardEvent(text: string, oldUser: IUser[], setNewList: (u: IUser[]) => void) {
    const randomIndex = Math.floor(Math.random() * postListData.length);
    const randomCardData: IUser = postListData[randomIndex];
    const newUser: IUser = {
        id: oldUser.length > 0 ? oldUser[oldUser.length - 1].id + 1 : 1, // Assigns an incremental ID
        author: {
            name: `${randomCardData.author.name}`,
            avatar: `${randomCardData.author.avatar}`
        },
        content: text,
        publishDate: new Date().toISOString().split("T")[0],
    }
    setNewList([...oldUser, newUser]);
}


export function Home() {

    // const [lockState, setLockState] = React.useState<boolean>(false);
    const [contentText, setContentText] = React.useState<string>("")
    const [cardList, setNewCardList] = React.useState<IUser[]>(postListData);

    return (
        <main className="container">
            <h1>Hello, world!</h1>
            <div className="publishBlog">
            <textarea
                onChange={(e) => onChangeEvent(e, setContentText)}
                placeholder={"寫點什麼..."}
                value={contentText}
                cols={30}
                rows={5}>
            </textarea>
            </div>
            <button onClick={() => {
                handleAddNewCardEvent(contentText, cardList, setNewCardList);
                setContentText("");
            }} className="releaseButton">發布
            </button>
            <div>
                {cardList.map((item: IUser) => (
                    <PostListItem itemData={item} key={item.id}>
                        <EditAndDeleteButton onEdit={
                            (s, e) => {
                                setNewCardList(cardList.filter((i) => i.id !== item.id));
                            }
                        }
                        />
                    </PostListItem>
                ))}
            </div>
        </main>
    )
        ;
}
