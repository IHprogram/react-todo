export const ADDTASK = 'addTask';
export const DELETETASK = 'deleteTask';

export const addTask = (ob) => {
  return {
    type: ADDTASK,
    payload: {
      title: ob.title,
      human: ob.human,
      detail: ob.detail,
      deadline: ob.deadline,
      start: ob.start,
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
