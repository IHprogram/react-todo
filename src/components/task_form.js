import React from 'react';
import {
  useHistory
} from 'react-router-dom';

export const TaskForm = props => {
  const history = useHistory();
  const handleLink = path => history.push(path);
  const add = (e) => {
    const ob = {};
    ob.title = e.target.previousElementSibling.children[0].children[1].value;
    ob.human = e.target.previousElementSibling.children[1].children[1].value;
    ob.detail = e.target.previousElementSibling.children[2].children[1].value;
    ob.deadline = e.target.previousElementSibling.children[3].children[1].value;
    ob.start = e.target.previousElementSibling.children[4].children[1].value;

    props.addTask(ob);
    handleLink('/');
  }
  return (
    <div>
      <h2>フォームです</h2>
      <div>
        <div>
          <label>
            チケット名：
          </label>
          <input type="text" name="title" />
        </div>

        <div>
          <label>
            担当者：
          </label>
          <input type="text" name="human" />
        </div>

        <div>
          <label>詳細</label>
          <textarea name="detail">
          </textarea>
        </div>

        <div>
          <label>
            期日：
          </label>
          <input type="date" name="date" />
        </div>

        <div>
          <label>
            開始日：
          </label>
          <input type="date" name="date" />
        </div>
      </div>

      <button onClick={add}>追加</button>
    </div>
  )
}