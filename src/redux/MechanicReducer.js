const initState = {
  list: [],

  refmec: {},
  sampleList: ["Delhi", "Kolkata", "Chennai", "Mumbai"],
};

// ACTION TYPES
const MECHANIC_CREATE = "MECHANIC_CREATE";
const MECHANIC_UPDATE = "MECHANIC_UPDATE";
const MECHANIC_DELETE = "MECHANIC_DELETE";
const MECHANIC_GET_ALL = "MECHANIC_GET_ALL";
const MECHANIC_GET_BY_ID = "MECHANIC_GET_BY_ID";

const REF_MECHANIC = "REF_MECHANIC";

// ACTIONS :: COmponents are interacting with this action
export function createMechanicAction(payload) {
  // return { type: EMPLOYEE_CREATE, payload: payload };

  // MAKE SURE redux-thunk is installed.
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/mechanics/";
    const requestBody = { ...payload};

    // HTTP Client
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // UPDATE THE UI
    dispatch({ type: MECHANIC_CREATE, payload: payload });
  };
}

export function updateMechanicAction(payload) {
  // return { type: EMPLOYEE_UPDATE, payload: payload };
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = `http://localhost:8080/api/mechanics/${payload.mechanicsId}`;
    const requestBody = { ...payload};

    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    // update the ui.
    dispatch(updateRefMechanic({}));
  };
}

export function deleteMechanicAction(payload) {
  // return { type: EMPLOYEE_DELETE, payload: payload };

  // redux thunk
  return async (dispatch) => {
    const url = `http://localhost:8080/api/mechanics/${payload.mechanicsId}`;
    await fetch(url, { method: "DELETE" });

    // update the ui.
    dispatch(getAllMechanicAction());
  };
}

export function getAllMechanicAction(payload) {
  // return { type: EMPLOYEE_GET_ALL, payload: payload };

  // API CALL/BACKEND CALL / REDUX-THUNK IS THERE
  return async (dispatch) => {
    // WE HV TO CALL THE SPRINT1 / SPRING BOOT
    const url = "http://localhost:8080/api/mechanics/";

    // HTTP Client / POSTMAN / SWAGGER
    const response = await fetch(url);
    const mechanicList = await response.json();
    console.log(mechanicList);

    // Update the UI
    dispatch({ type: MECHANIC_GET_ALL, payload: mechanicList });
  };
}

export function getByIdMechanicAction(payload) {
  // return { type: EMPLOYEE_GET_BY_ID, payload: payload };
  return async (dispatch) => {
    const url = `http://localhost:8080/api/mechanics/${payload.mechanicsId}`;
    const response = await fetch(url);
    const mechanicObj = await response.json();

    // this wil update the refemp
    dispatch(updateRefMechanic(mechanicObj));
  };
}

export function updateRefMechanic(payload) {
  return { type: REF_MECHANIC, payload: payload };
}

// REDUCER LOGIC
export function MechanicReducer(state = initState, action) {
  switch (action.type) {
    case MECHANIC_CREATE:
      return { ...state, list: [action.payload, ...state.list] };
    case MECHANIC_UPDATE:
      // TODO
      return state;
    case MECHANIC_DELETE:
      // TODO
      const oldList = state.list;
      oldList.splice(action.payload, 1);
      console.log("OL", oldList);

      return { ...state, list: [...oldList] };
    case MECHANIC_GET_ALL:
      // Update the list
      return { ...state, list: action.payload };
    case MECHANIC_GET_BY_ID:
      // TODO
      return state;

    case REF_MECHANIC:
      return { ...state, refemp: action.payload };

    default:
      return state;
  }
}
