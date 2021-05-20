// export const CREATETASK = 'createTask';
export const ADDTASK = 'addTask'; //変えてはいけない値のスペルミスを防ぐために、このように定数にしている
export const DELETETASK = 'deleteTask';

// export const createTask = () => {
//   return {
//     type: CREATETASK
//   }
// }

export const addTask = (title) => {
  return {
    type: ADDTASK,
    payload: {
      title: title
    }
  }
}

export const deleteTask = (index) => {
  return {
    type: DELETETASK,
    payload: {
      index: index
    }
  }

}