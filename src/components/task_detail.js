import {
  useLocation
} from 'react-router-dom';
import Button from '@material-ui/core/Button'


export const TaskDetail = () => {
  const location = useLocation();
  const task = location.state.somedata;
  console.log(location)

  return (
    <div>
      <h2>チケット詳細表示</h2>
      <ul>
        <li>チケット名: {task.title}</li>
        <li>詳細: {task.detail}</li>
        <li>担当者: {task.human}</li>
        <li>期日: {task.deadline}</li>
        <li>開始日: {task.start}</li>
      </ul>
      <Button variant="contained" color="primary" onClick={() => { console.log(task) }}>ボタン</Button>
    </div>
  )
}