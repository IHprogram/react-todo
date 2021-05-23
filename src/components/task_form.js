import React from 'react';
import {
  useHistory
} from 'react-router-dom';

export const TaskForm = props => {
  console.log('TaskFormです');
  console.log(props);
  const history = useHistory();
  const handleLink = path => history.push(path);
  const kansu = (e) => {
    console.log(e.target.previousElementSibling.value);
    props.addTask(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = '';
    handleLink('/');
  }
  return (
    <div>
      <h2>フォームです</h2>
      <input />
      <button onClick={kansu}>追加</button>
    </div>
  )
}