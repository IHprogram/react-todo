// import './App.css';
import { connect } from 'react-redux';
import React, { Component, useState } from "react";
import { addTask, deleteTask, addURL } from '../actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { Navi } from './navi.js';
import { TaskForm } from './task_form.js';


// class App extends Component {
//   render() {

const App = (hoge) => {
  console.log(hoge);
  // const props = this.props;
  const props = hoge;
  console.log(props)
  const kansu = (e) => {
    console.log(e.target.previousElementSibling.value);
    props.addTask(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = '';
  }
  return (
    <Router>
      <div>
        <Navi />
        <Switch>
          <Route path="/task_form">
            <TaskForm addTask={props.addTask} />
          </Route>
          <Route path="/">
            <h1>todoリスト</h1>
            <input />
            <button onClick={kansu}>追加</button>
            <ul>
              {props.todos.map((todo, index) => (
                <li key={index}>{todo.title} <button onClick={() => props.deleteTask(index)}>削除</button></li>
              ))}
            </ul>
            <Child addURL={props.addURL} urls={props.urls} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
  // }
}

const Child = (props) => {
  console.log(props);
  const func1 = (e) => {
    console.log(e.target.previousElementSibling.value);
    props.addURL(e.target.previousElementSibling.value);
    e.target.previousElementSibling.value = '';
  }
  return (
    <React.Fragment>
      <h2>URL管理アプリ</h2>
      <input />
      <button onClick={func1}>送信</button>
      <h3>URL一覧</h3>
      <ul>
        {props.urls.map((url, index) => (
          <li key={index}>
            <a href={url.url} target="_blank">{url.url}</a>
            <button onClick={() => console.log(props)}>削除</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  todos: state.task,
  urls: state.url
})

const mapDispatchToProps = dispatch => ({
  addTask: (hikisu) => dispatch(addTask(hikisu)),
  deleteTask: (index) => dispatch(deleteTask(index)),
  addURL: (hikisu) => dispatch(addURL(hikisu)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
