import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import findIndex from "lodash.findindex";

import styles from "./Detail.module.scss";
import * as likesActions from "../../redux/actions/likes";
import LikeWhiteIcon from "../../assets/icons/like-white.png";
import LikeRedIcon from "../../assets/icons/like-red.png";
import CommentIcon from "../../assets/icons/comment.png";
import Icon from "../../elements/icon/Icon.component";
import { capitalizeFirstLetter } from "../../utils/string";
import Button from "../../elements/button";
import { userId } from "../../constants/dummy";
import CommentsList from "../../components/commentsList";

const Detail = ({ contents, comments, likes, addLike, deleteLike }) => {
  const location = useLocation();
  const contentId = location.state.id;

  const [contentDetails, setContentDetails] = React.useState(null);
  const [likeCount, setLikeCount] = React.useState(0);
  const [commentsList, setCommentsList] = React.useState(null);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const getLikesDetails = async () => {
    const allLikes = likes.filter(
      (like) => like.contentId === contentId
    ).length;
    setLikeCount(allLikes);

    const hasLiked = likes.filter(
      (like) => like.contentId === contentId && like.userId === userId
    ).length;
    setLiked(!!hasLiked);
  };

  const getComments = async () => {
    const allComments = comments.filter(
      (comment) => comment.contentId === contentId
    );
    setCommentsList(allComments);
  };

  const getContentDetails = async () => {
    const index = findIndex(contents, { id: contentId });
    const content = contents[index];
    setContentDetails(content);
  };

  React.useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        await getLikesDetails();
        await getComments();
        await getContentDetails();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [contentId, likes, comments]);

  if (loading) return null;

  return (
    <div className={styles.component}>
      {contentId !== null && contentDetails ? (
        <>
          <p className={styles.header}>
            {capitalizeFirstLetter(contentDetails.title)}
          </p>
          <CommentsList comments={commentsList} contentId={contentId} />
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
        <p>Could not get any details about this video</p>
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
    addLike: ({ userId, contentId }) =>
      dispatch(likesActions.addLike({ userId, contentId })),
    deleteLike: ({ userId, contentId }) =>
      dispatch(likesActions.deleteLike({ userId, contentId })),
  })
)(Detail);