import type { Comment } from "../../pages/detail/Detail.types";
import { COMMENT_ADD } from "../actions/comments";

const initialState: CommentsState = {
  comments: [
    {
      contentId: 0,
      userName: "max",
      title: "Nice video",
    },
    {
      contentId: 0,
      userName: "max",
      title: "Ok",
    },
    {
      contentId: 0,
      userName: "max",
      title: "This",
    },
    {
      contentId: 0,
      userName: "max",
      title: "Monday",
    },
    {
      contentId: 0,
      userName: "max",
      title: "Hi",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Nice",
    },
    {
      contentId: 1,
      userName: "max",
      title: "No",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Nice video",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Ok",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Good",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Right",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Hello",
    },
    {
      contentId: 1,
      userName: "max",
      title: "Nice",
    },
    {
      contentId: 1,
      userName: "max",
      title: "No",
    },
  ],
};

interface CommentsState {
  comments: Comment[];
}

interface CommentAddAction {
  type: typeof COMMENT_ADD;
  comment: Comment;
}

const Comments = (state = initialState, actions: CommentAddAction) => {
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
