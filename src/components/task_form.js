import React, { useState } from 'react';
import {
  useHistory
} from 'react-router-dom';
import { Button, makeStyles, TextField } from '@material-ui/core';

export const TaskForm = props => {
  const history = useHistory();
  const handleLink = path => history.push(path);

  const useStyles = makeStyles({
    button: {
      backgroundColor: 'red'
    }
  });
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [human, setHuman] = useState('');
  const [detail, setDetail] = useState('');
  const [deadline, setDeadline] = useState('');
  const [start, setStart] = useState('');

  const titleChange = (e) => {
    setTitle(e.target.value)
  }

  const humanChange = (e) => {
    setHuman(e.target.value)
  }
  const detailChange = (e) => {
    setDetail(e.target.value)
  }
  const deadlineChange = (e) => {
    setDeadline(e.target.value)
  }
  const startChange = (e) => {
    setStart(e.target.value)
  }

  const add = (e) => {
    console.log(e);
    const ob = {};
    // ob.title = e.target.previousElementSibling.children[0].children[1].value;
    // ob.human = e.target.previousElementSibling.children[1].children[1].value;
    // ob.detail = e.target.previousElementSibling.children[2].children[1].value;
    // ob.deadline = e.target.previousElementSibling.children[3].children[1].value;
    // ob.start = e.target.previousElementSibling.children[4].children[1].value;
    ob.title = title;
    ob.human = human;
    ob.detail = detail;
    ob.deadline = deadline;
    ob.start = start;

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
          <TextField onChange={titleChange} />
        </div>

        <div>
          <label>
            担当者：
          </label>
          <TextField onChange={humanChange} />
        </div>

        <div>
          <label>詳細</label>
          <textarea name="detail" onChange={detailChange}>
          </textarea>
        </div>

        <div>
          <label>
            期日：
          </label>
          <input type="date" name="date" onChange={deadlineChange} />
          {/* <TextField /> */}
        </div>

        <div>
          <label>
            開始日：
          </label>
          <input type="date" name="date" onChange={startChange} />
          {/* <TextField /> */}
        </div>
      </div>

      <Button variant="contained" className={classes.button} onClick={add}>ボタン</Button>
    </div>
  )
}