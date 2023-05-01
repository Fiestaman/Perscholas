// the reducer with our stateful logic
const counterReducer = (state, action) => {
  // get the type and payload from the action
  const { type, payload } = action;

  switch (type) {
    // determine how to update the state based on action type
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    default:
      // if it doesn't match any type, keep the state as is
      return state;
  }
};

export default counterReducer;
