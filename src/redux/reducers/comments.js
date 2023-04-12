import { COMMENT_ADD } from "../actions/comments";

const initialState = {
  comments: [
    {
      contentId: 1,
      userName: "max",
      title: "Test",
    },
  ],
};

const Comments = (state = initialState, actions) => {
  switch (actions.type) {
    case COMMENT_ADD:
      return {
        ...state,
        comments: [...state.comments, actions.comment],
      };
    default:
      return { ...state };
  }
};

export default Comments;
