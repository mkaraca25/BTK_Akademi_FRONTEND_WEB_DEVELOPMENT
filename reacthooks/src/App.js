import logo from './logo.svg';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import React,{useState} from 'react';
import UserList from './UserList';

const data=[
  {id:1, name: 'Melik',email: 'melik@example.com',age:25,color:"red"},
  {id:2,name: 'John',email: 'john@example.com',age:28,color:"yellow"},
  {id:3,name: 'Mayk',email: 'mayk@example.com',age:20,color:"bisque"}
]
//useContext
const App=()=> {
  //const [showComponent,setShowComponent]=useState(true);
  const[users,setUsers] = useState(data);
  const changeColor=(id,color)=>{
    setUsers(
      users.map(user=>user.id===id?{
        ...user,color:color}:user))
      }

  return (
  <>
    <div className="App" >
      <header><h1>Welcome !</h1></header>
      <UserList users={users} changeColor={changeColor}/>


    </div>
  </>
  );
}
/*<button onClick={() => setShowComponent(!showComponent)}>Toggle Component</button>
        {showComponent?<ClassComponent/>:<div/>}
        <FunctionComponent/>*/

export default App;
