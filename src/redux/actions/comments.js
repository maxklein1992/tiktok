export const COMMENT_ADD = "COMMENT_ADD";
export const COMMENT_ADD_FAILED = "COMMENT_ADD_FAILED";

export const addComment =
  ({ contentId, title, userName }) =>
  async (dispatch) => {
    const comment = { contentId, title, userName };
    try {
      return dispatch({ type: COMMENT_ADD, comment: comment });
    } catch (error) {
      return dispatch({ type: COMMENT_ADD_FAILED, error: "failed comment" });
    }
  };
