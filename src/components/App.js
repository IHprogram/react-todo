import { connect } from 'react-redux';
import React from "react";
import { addTask, deleteTask } from '../actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Navi } from './navi.js';
import { TaskForm } from './task_form.js';
import { Tasks } from './tasks.js';
import { TaskDetail } from './task_detail.js'

const App = (hoge) => {
  const props = hoge;
  return (
    <Router>
      <div>
        <Navi />
        <Switch>
          <Route path='/task_detail/:taskId' exact component={TaskDetail} />
          <Route path="/task_form">
            <TaskForm addTask={props.addTask} />
          </Route>
          <Route path="/">
            <h1>todoリスト</h1>
            <Tasks todos={props.todos} deleteTask={props.deleteTask} />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
