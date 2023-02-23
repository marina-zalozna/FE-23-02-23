import React from 'react'

export default function UserAdd({createUser}) {
const onSubmit = event => {
    event.preventDefault();
    const {title, gender} = event.target;
    createUser(title.value, gender.value);
    title.value = '';
    gender.value = '';

}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Имя' name='title'/>
        <input type="text" placeholder='Ссылка на аватарку'name='avatar'/>
        <input type="text" placeholder='Пол' name='gender'/>
        <button>Добавить</button>
        
      </form>
    </div>
  )
}
