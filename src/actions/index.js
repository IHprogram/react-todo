export const ADDTASK = 'addTask';
export const DELETETASK = 'deleteTask';

export const ADDURL = 'addURL';
export const DELETEURL = 'deleteURL';

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

export const addURL = (url) => {
  return {
    type: ADDURL,
    payload: {
      url: url
    }
  }
}