import firebase, { providerGoogle } from '../firebase';

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

export const loginWithGoogle = () =>
  async () => {
    {
      await firebase.auth().signInWithRedirect(providerGoogle);
      firebase.auth().getRedirectResult()
    }
  }

export const logout = () =>
  async () => {
    {
      await firebase.auth().signOut()
    }
  }
  // console.log('logoutです')
  // firebase.auth().signOut()
  //   .then(result => {
  //     console.log(result);
  //   }).catch(error => {
  //     console.log(error);
  //   });