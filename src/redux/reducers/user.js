import { LIKE_ADD, LIKE_DELETE } from "../actions/likes";

const initialState = {
  user: {
    id: 0,
    name: "max",
  },
};

const User = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default User;
