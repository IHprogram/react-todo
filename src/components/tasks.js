import React from 'react';
import {
  Link,
} from 'react-router-dom';

export const Tasks = props => {
  return (
    <div>
      <h2>チケット一覧</h2>
      <ol>
        {props.todos.map((todo, index) => (
          <li key={index}>
            <Link to={{
              pathname: `/task_detail/${index + 1}`,
              state: { somedata: todo }
            }}>
              {todo.title}
            </Link>
            <span>  {todo.human}</span>
            <button onClick={() => props.deleteTask(index)}>削除</button>
          </li>
        ))}
      </ol>
    </div>
  )
}