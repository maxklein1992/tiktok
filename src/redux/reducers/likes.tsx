import type { Like } from "../../pages/detail/Detail.types";
import { LIKE_ADD, LIKE_DELETE } from "../actions/likes";

const initialState: LikesState = {
  likes: [
    {
      contentId: 1,
      userId: 2,
    },
  ],
};

interface LikesState {
  likes: Like[];
}

interface LikeDeleteAction {
  type: typeof LIKE_DELETE;
  like: Like;
}

interface LikeAddAction {
  type: typeof LIKE_ADD;
  like: Like;
}

type LikesAction = LikeDeleteAction | LikeAddAction;

const Likes = (state = initialState, actions: LikesAction) => {
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
