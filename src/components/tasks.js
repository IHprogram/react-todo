import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export const Tasks = props => {
  return (
    <div>
      <h2>タスク一覧</h2>
      <ol>
        {props.todos.map((todo, index) => (
          <li key={index}>
            <Link to={`/task_detail/${index + 1}`}>{todo.title}</Link>
            <span> {todo.human}</span>
            <button onClick={() => props.deleteTask(index)}>削除</button>
          </li>
        ))}
      </ol>
    </div>
  )
}