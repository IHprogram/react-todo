// import './App.css';
import { connect } from 'react-redux';
import React, { Component, useState } from "react";
import { addTask, deleteTask } from '../actions'

// function App() {
//   return (
//     <div className="App">
//       <h1>Todoリスト</h1>
//       <h2>タスク一覧</h2>
//       <button onClick={() => console.dir()}>useStateボタン</button>
//       <ul>
//         <List />
//       </ul>
//     </div>
//   );
// }

// const List = () => {
//   const [task, setTask] = useState([{ id: 1, text: "こんにちは" }]);
//   return (
//     <li>

//     </li>
//   )
// }


// 以下、タスク管理の回答

// const App = () => {
//   const todolist = [
//     { title: '概要作成', flg: false },
//     { title: '画面設計作成', flg: false },
//     { title: '詳細設計作成', flg: false },
//     { title: 'コーディング', flg: false },
//     { title: 'テスト', flg: false }]

//   const [todos, setTodo] = useState(todolist)

//   const [task, setTask] = useState("")

//   const createTask = (e) => {
//     setTask(e.target.value);
//   }

//   const addTask = (e) => {
//     //===createTask使わず、ここでテキストボックスの要素を指定して取得するのもあり（DOM）
//     // if (task === '') return
//     // setTodo(todos => [...todos, { title: task, flg: false }])
//     // setTask('')

//     if (task === '') {
//       return;
//     }
//     setTodo([...todos, { title: task, flg: false }]);
//     setTask('');
//   }

//   const removeTask = index => {
//     const newTodos = [...todos]
//     newTodos.splice(index, 1)
//     setTodo(newTodos)
//   }

//   return (
//     <div>
//       <h1>todoリスト</h1>
//       <input value={task} onChange={createTask} />
//       <button onClick={addTask}>追加</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo.title} <button onClick={() => removeTask(index)}>削除</button></li>
//         ))}
//       </ul>
//       <button onClick={() => console.log(task)}>task確認ボタン</button>
//     </div>
//   )
// }

class App extends Component {
  render() {

    const props = this.props;
    console.log(props)
    const kansu = (e) => {
      console.log(e.target.previousElementSibling.value);
      props.addTask(e.target.previousElementSibling.value);
      // dispatch(props.addTask(e.target.previousElementSibling.value));
    }
    return (
      <React.Fragment>
        <h1>todoリスト</h1>
        <input />
        <button onClick={kansu}>追加</button>
        {/* <button onClick={props.addTask}>追加</button> */}
        <ul>
          {props.todos.map((todo, index) => (
            <li key={index}>{todo.title} <button onClick={() => props.deleteTask(index)}>削除</button></li>
          ))}
        </ul>
        {/* <button onClick={() => console.log(task)}>task確認ボタン</button> */}
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

// export default App;