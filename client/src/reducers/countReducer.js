export const initialState = {
  count: 0,
};

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
};

export const incrementActionCreator = (payload) => {
  return { type: ACTIONS.INCREMENT, payload };
};

export const asyncActionCreator = (payload) => {
  return async (dispatch) => {
    const response = await new Promise((res) =>
      setTimeout(() => {
        res(payload);
      }, 2000),
    );
    dispatch(incrementActionCreator(response));
  };
};

const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
};

export default countReducer;
