import React from 'react'

// Задание:
//    Выведите значения из переменных
// Данные:
//    let age = 12;
//    let name = "Yury"
// HTML
//    <span>Имя: Юрий, возраст: 12</span>

function Task3 () {
  let age = 12;
  let name = "Yury"
    return (
      <div>
        <span>Имя: {name}, возраст: {age}</span>
      </div>
    )
}

export default Task3
