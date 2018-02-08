import * as constants from "../actions/constants";

const user = (state = "", action) => {
  switch (action.type) {
    case constants.SIGNED_IN:
      return action.user;
    default:
      return state;
  }
};

export default user;
