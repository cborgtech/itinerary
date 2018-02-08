import * as constants from "../actions/constants";
import signInReducer from "./signin-reducer";

it("should return the initial state of the reduced value", () => {
  expect(signInReducer(undefined, {})).toEqual("");
});

it("should set the user value to the store", () => {
  const user = "mockemail@hotmail.com";
  expect(signInReducer(null, { type: constants.SIGNED_IN, user })).toEqual(
    user
  );
});
