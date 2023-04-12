import type { User as UserProps } from "../../pages/detail/Detail.types";

const initialState: UserState = {
  user: {
    id: 0,
    name: "max",
  },
};

interface UserState {
  user: UserProps;
}

const User = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return { ...state };
  }
};

export default User;
