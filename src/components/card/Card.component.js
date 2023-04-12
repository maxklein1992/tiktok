import React from "react";
import { connect } from "react-redux";

import styles from "./Card.module.scss";
import LikeWhiteIcon from "../../assets/icons/like-white.png";
import * as likesActions from "../../redux/actions/likes";
import LikeRedIcon from "../../assets/icons/like-red.png";
import CommentIcon from "../../assets/icons/comment.png";
import Icon from "../../elements/icon/Icon.component";
import Button from "../../elements/button";

const Card = ({ onClick, id, user, likes, addLike, deleteLike }) => {
  const [liked, setLiked] = React.useState(false);
  const userId = user.id;

  const getDetails = () => {
    const hasLiked = likes.filter(
      (like) => like.contentId === id && like.userId === userId
    ).length;
    setLiked(!!hasLiked);
  };

  React.useEffect(() => {
    getDetails();
  }, [id, likes]);

  return (
    <Button className={styles.component} onClick={onClick}>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }}
        >
          <Icon alt="comment" icon={CommentIcon} />
        </Button>
        <Button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            !liked
              ? addLike({ userId: userId, contentId: id })
              : deleteLike({ userId: userId, contentId: id });
          }}
        >
          <Icon alt="like" icon={liked ? LikeRedIcon : LikeWhiteIcon} />
        </Button>
      </div>
    </Button>
  );
};

export default connect(
  (state) => ({
    user: state.user,
    likes: state.likes.likes,
  }),
  (dispatch) => ({
    addLike: ({ userId, contentId }) =>
      dispatch(likesActions.addLike({ userId, contentId })),
    deleteLike: ({ userId, contentId }) =>
      dispatch(likesActions.deleteLike({ userId, contentId })),
  })
)(Card);
