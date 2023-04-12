import { LIKE_ADD, LIKE_DELETE } from "../actions/likes";

const initialState = {
  likes: [
    {
      contentId: 1,
      userId: 2,
    },
  ],
};

const Likes = (state = initialState, actions) => {
  switch (actions.type) {
    case LIKE_DELETE:
      return {
        ...state,
        likes: state.likes.filter((like) => {
          return (
            like.contentId !== actions.like.contentId ||
            like.userId !== actions.like.userId
          );
        }),
      };
    case LIKE_ADD:
      return {
        ...state,
        likes: [...state.likes, actions.like],
      };
    default:
      return { ...state };
  }
};

export default Likes;
