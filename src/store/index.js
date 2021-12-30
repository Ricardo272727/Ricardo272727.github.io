import { createStore } from 'redux';
import { ACTIONS } from './actions.js';
import data from './data.json';

const initialState = {
  data: data,
  projects: data.projects,
  experience: data.experience
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTIONS.SET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      }
    case ACTIONS.SET_DATA:
      return {
        ...state,
        data: action.data
      }
    default: 
      return state;
  }
}


const store = createStore(rootReducer);

export default store;


