import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

export const Navi = props => {
  return (
    <nav>
      <li>
        <Link to="/">トップ</Link>
      </li>
      <li>
        <Link to="/task_form">チケット作成</Link>
      </li>
    </nav>
  )
}
