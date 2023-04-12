import React from "react";

import styles from "./CommentsList.module.scss";
import Comment from "../comment/Comment.component";

const CommentsList = ({ comments }) => {
  return (
    <div className={styles.commentsList}>
      {comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })
      )}
    </div>
  );
};

export default CommentsList;
