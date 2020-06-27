

export const ACTIONS = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_DATA: "SET_DATA",
}

export const setProjects = (projects) => {
  return {
    type: ACTIONS.SET_PROJECTS,
    projects
  }
}

export const setData = (data) => {
  return {
    type: ACTIONS.SET_DATA,
    data
  }
}





