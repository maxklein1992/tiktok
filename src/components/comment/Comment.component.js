import React from "react";

import { capitalizeFirstLetter } from "../../utils/string";
import styles from "./Comment.module.scss";

const Comment = ({ comment }) => {
  return (
    <p className={styles.comment}>
      {`${capitalizeFirstLetter(comment.userName)}: ${capitalizeFirstLetter(
        comment.title
      )}`}
    </p>
  );
};

export default Comment;
