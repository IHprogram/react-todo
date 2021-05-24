import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';


export const TaskDetail = props => {
  console.log('detailです')
  console.log(props);
  const { params } = props.match;
  console.log(params.taskId);
  useEffect(() => {
    console.log('useEffectです');
  }, []);

  return (
    <div>
      <p>task_detailです</p>
    </div>
  )
}