import * as constants from "./constants";

export const signInUser = user => {
  return {
    type: constants.SIGNED_IN,
    user
  };
};
