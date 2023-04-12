import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import findIndex from "lodash.findindex";

import styles from "./Detail.module.scss";
import * as commentsActions from "../../redux/actions/comments";
import * as likesActions from "../../redux/actions/likes";
import LikeWhiteIcon from "../../assets/icons/like-white.png";
import LikeRedIcon from "../../assets/icons/like-red.png";
import PlayIcon from "../../assets/icons/play.png";
import CommentIcon from "../../assets/icons/comment.png";
import Icon from "../../elements/icon/Icon.component";
import { capitalizeFirstLetter } from "../../utils/string";
import Button from "../../elements/button";
import { userId, userName } from "../../constants/dummy";
import CommentsList from "../../components/commentsList";
import Input from "../../elements/input";

const Detail = ({
  contents,
  comments,
  likes,
  addComment,
  addLike,
  deleteLike,
}) => {
  const location = useLocation();
  const contentId = location.state.id;

  const [contentDetails, setContentDetails] = React.useState(null);
  const [likeCount, setLikeCount] = React.useState(0);
  const [commentsList, setCommentsList] = React.useState(null);
  const [liked, setLiked] = React.useState(false);
  const [comment, setComment] = React.useState("");

  const getDetails = () => {
    const allLikes = likes.filter(
      (like) => like.contentId === contentId
    ).length;
    setLikeCount(allLikes);

    const allComments = comments.filter(
      (comment) => comment.contentId === contentId
    );
    setCommentsList(allComments);

    const index = findIndex(contents, { id: contentId });
    const content = contents[index];
    setContentDetails(content);

    const hasLiked = likes.filter(
      (like) => like.contentId === contentId && like.userId === userId
    ).length;
    setLiked(!!hasLiked);
  };

  const submitComment = async () => {
    //setFeedbackIsSubmitting(true);
    const response = await addComment({ title: comment, contentId, userName });
    if (response) {
      setComment("");
      //setFeedbackIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    getDetails();
  }, [contentId, likes, comments]);

  return (
    <div className={styles.component}>
      {contentId !== null && contentDetails ? (
        <>
          <p className={styles.header}>
            {capitalizeFirstLetter(contentDetails.title)}
          </p>
          <div className={styles.commentsContainer}>
            <CommentsList comments={commentsList} />
            <div className={styles.inputContainer}>
              <Input
                className={styles.input}
                placeholder="Message..."
                value={comment}
                name="comment"
                onChange={(value) => setComment(value)}
              />
              <Button onClick={() => submitComment()} disabled={!comment}>
                <Icon alt="play" icon={PlayIcon} size="medium" />
              </Button>
            </div>
          </div>
          <div className={styles.buttonsContainer}>
            <Button
              onClick={() =>
                !liked
                  ? addLike({ userId, contentId })
                  : deleteLike({ userId, contentId })
              }
            >
              <Icon
                alt="like"
                icon={liked ? LikeRedIcon : LikeWhiteIcon}
                size="big"
              />
              <p className={styles.countsTitle}>{likeCount}</p>
            </Button>
            <div className={styles.iconContainer}>
              <Icon alt="comment" icon={CommentIcon} size="big" />
              <p className={styles.countsTitle}>{commentsList.length}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    contents: state.contents.contents,
    likes: state.likes.likes,
    comments: state.comments.comments,
  }),
  (dispatch) => ({
    addComment: ({ title, contentId, userName }) =>
      dispatch(commentsActions.addComment({ title, contentId, userName })),
    addLike: ({ userId, contentId }) =>
      dispatch(likesActions.addLike({ userId, contentId })),
    deleteLike: ({ userId, contentId }) =>
      dispatch(likesActions.deleteLike({ userId, contentId })),
  })
)(Detail);
