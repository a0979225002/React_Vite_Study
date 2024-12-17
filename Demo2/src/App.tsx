import './App.css'
import postListData from './Data/postListData.json' with {type:'json'}
import PostListItem, {IUser} from "./components/PostListItem";
import EditAndDeleteButton from "./components/EditAndDeleteButton";


function App() {
  return (
      <div>
          <h1>Hello word</h1>
          <div>{
              postListData.map((item:IUser) =>(
                  // 假裝傳兩個props 參數
                  <PostListItem itemData={item} itemData2={item} key={item.id} >
                      <EditAndDeleteButton onEdit={(s,e) => console.log(`${item.id} ${s} ${e.type}`)} />
                  </PostListItem>

              ))
          }</div>
      </div>
  )
}

export default App
