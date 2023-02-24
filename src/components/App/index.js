import { useState } from "react";
import User from "../User";
import UserAdd from "../UserAdd";
import s from "./style.module.css"

function App() {
  const defaultUsers = [
    { id: 1, title: "Svetlana", avatar: "https://via.placeholder.com/50", gender: "women" },
    { id: 2, title: "Vladimir", avatar: "https://via.placeholder.com/50", gender: "man" },
    { id: 3, title: "Alexandr", avatar: "https://via.placeholder.com/50", gender: "man" },
    { id: 4, title: "Tatyana", avatar: "https://via.placeholder.com/50", gender: "women" },
  ];

  const [users, setUsers] = useState(defaultUsers);

  const createUser = (title, gender, avatar) => {
    const newUser = {
      id: Date.now(),
      title,
      avatar,
      gender
    }
    const newArr = [...users, newUser];
    setUsers(newArr)
  }
  
  return (
    <div>
      <UserAdd createUser ={createUser }/>
      <div className={s.man}>Man
      <div className={s.user}>
        {
          users
          .filter((user) => user.gender === 'man')
          .map((user) => 
        <User 
        key={user.id} 
        {...user} />
      )}
      </div>
      </div>
      
      <div className={s.man}>Woman
      <div className={s.user}>
        {
          users
          .filter((user) => user.gender !== 'man')
          .map((user) => 
        <User 
        key={user.id} 
        {...user} />
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
