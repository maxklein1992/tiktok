export const LIKE_ADD = "LIKE_ADD";
export const LIKE_ADD_FAILED = "LIKE_ADD_FAILED";

export const LIKE_DELETE = "LIKE_DELETE";
export const LIKE_DELETE_FAILED = "LIKE_DELETE_FAILED";

export const addLike =
  ({ contentId, userId }) =>
  async (dispatch) => {
    const like = { contentId, userId };
    try {
      return dispatch({ type: LIKE_ADD, like: like });
    } catch (error) {
      return dispatch({ type: LIKE_ADD_FAILED, error: "failed like" });
    }
  };

export const deleteLike =
  ({ contentId, userId }) =>
  async (dispatch) => {
    const like = { contentId, userId };
    try {
      return dispatch({ type: LIKE_DELETE, like: like });
    } catch (error) {
      return dispatch({ type: LIKE_DELETE_FAILED, error: "failed like" });
    }
  };
