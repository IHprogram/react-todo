import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";
import { addTask, deleteTask, loginWithGoogle, logout } from '../actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Navi } from './navi.js';
import { TaskForm } from './task_form.js';
import { Tasks } from './tasks.js';
import { TaskDetail } from './task_detail.js'
import firebase, { providerGoogle } from '../firebase';

const App = (hoge) => {
  const props = hoge;
  const [userName, setUserName] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUserName(firebase.auth().currentUser.displayName)
      } else {
        console.log('userはログインしていません');
        setUserName('')
      }
    })
  }, []);
  const handleLogin = () => {
    props.loginWithGoogle();
  };

  const handleLogout = () => {
    props.logout();
  };
  return (
    <Router>
      <div>
        <Navi />
        <p>{userName}</p>
        <Switch>
          <Route path='/task_detail/:taskId' exact component={TaskDetail} />
          <Route path="/task_form">
            <TaskForm addTask={props.addTask} />
          </Route>
          <Route path="/">
            <h1>todoリスト</h1>
            <Tasks todos={props.todos} deleteTask={props.deleteTask} />
            <button onClick={handleLogin}>ログイン</button>
            <button onClick={handleLogout}>ログアウト</button>
            <button onClick={() => console.log(firebase.auth().currentUser)}>確認</button>
            <button onClick={() => console.log(firebase.auth().currentUser.displayName)}>確認</button>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  todos: state.task,
})

const mapDispatchToProps = dispatch => ({
  addTask: (hikisu) => dispatch(addTask(hikisu)),
  deleteTask: (index) => dispatch(deleteTask(index)),
  loginWithGoogle: () => dispatch(loginWithGoogle()),
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
