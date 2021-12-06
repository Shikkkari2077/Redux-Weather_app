const initalState = {};

export const weatherReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return action.payload
    default:
      return state;
  }
};
