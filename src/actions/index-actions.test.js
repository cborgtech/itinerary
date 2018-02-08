import * as constants from "./constants";
import * as actions from "./index-actions";

it("creates an action to sign-in the user", () => {
  const user = "";
  const expectedAction = { type: constants.SIGNED_IN, user };
  expect(actions.signInUser(user)).toEqual(expectedAction);
});
