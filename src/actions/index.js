export const ADDTASK = 'addTask';
export const DELETETASK = 'deleteTask';

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