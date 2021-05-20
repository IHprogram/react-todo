// import './App.css';
import { connect } from 'react-redux';
import React, { Component, useState } from "react";
import { addTask, deleteTask } from '../actions'


class App extends Component {
  render() {

    const props = this.props;
    console.log(props)
    const kansu = (e) => {
      console.log(e.target.previousElementSibling.value);
      props.addTask(e.target.previousElementSibling.value);
    }
    return (
      <React.Fragment>
        <h1>todoリスト</h1>
        <input />
        <button onClick={kansu}>追加</button>
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index}>{todo.title} <button onClick={() => props.deleteTask(index)}>削除</button></li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.task
})

const mapDispatchToProps = dispatch => ({
  addTask: (hikisu) => dispatch(addTask(hikisu)),
  deleteTask: (index) => dispatch(deleteTask(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
