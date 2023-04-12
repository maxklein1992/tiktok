import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "./CommentsList.module.scss";
import * as commentsActions from "../../redux/actions/comments";
import UpIcon from "../../assets/icons/up.png";
import DownIcon from "../../assets/icons/down.png";
import Icon from "../../elements/icon";
import PlayIcon from "../../assets/icons/play.png";
import Button from "../../elements/button";
import { capitalizeFirstLetter } from "../../utils/string";
import Input from "../../elements/input";

const CommentsList = ({ comments, addComment, contentId, user }) => {
  const { t } = useTranslation();

  const firstMessageRef = React.useRef(null);
  const lastMessageRef = React.useRef(null);
  const [newComment, setNewComment] = React.useState("");
  const [isScrollable, setIsScrollable] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  const isEmpty = comments.length === 0;
  const userName = user.name;

  const handleClickScroll = (direction, isSmooth) => {
    let element = null;

    if (direction === "down") {
      element = lastMessageRef.current;
    } else if (direction === "up") {
      element = firstMessageRef.current;
    }
    if (element) {
      element.scrollIntoView({ behavior: isSmooth && "smooth" });
    }
  };

  const handleVisibilityScrollButtons = () => {
    const scrollContainer = document.getElementById("scroll-container");
    const scrollableArea = document.getElementById("scrollable-area");

    if (scrollContainer) {
      scrollContainer.onscroll = function () {
        setScrollPercentage(
          scrollContainer.scrollTop /
            (scrollableArea.clientHeight - scrollContainer.offsetHeight)
        );
      };
    }
  };

  const checkIsScrollable = () => {
    const scrollContainer = document.getElementById("scroll-container");
    const scrollableArea = document.getElementById("scrollable-area");

    const isScrollable =
      scrollableArea.clientHeight > scrollContainer.offsetHeight;
    setIsScrollable(isScrollable);
  };

  const submitComment = async () => {
    setLoading(true);
    const response = await addComment({
      title: newComment,
      contentId,
      userName,
    });
    if (response.comment) {
      setNewComment("");
      setLoading(false);
    }
    if (response.error) {
      setNewComment("");
      setLoading(false);
      console.log(response.error, "error");
    }
  };

  const keyboardSupport = (event) => {
    if (newComment)
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        submitComment();
      }
  };

  React.useEffect(() => {
    setTimeout(() => {
      handleClickScroll("down", true);
      checkIsScrollable();
      handleVisibilityScrollButtons();
    }, 0);
  }, [comments]);

  return (
    <div className={styles.container}>
      <div className={styles.commentsContainer} id="scroll-container">
        <ul
          className={[styles.scrollableAreaContainer, isEmpty && styles.isEmpty]
            .join(" ")
            .trim()}
          id="scrollable-area"
        >
          {isEmpty ? (
            <p>{t("components.commentsList.no_comments")}</p>
          ) : (
            comments.map((comment, i) => {
              return (
                <li
                  key={`Message: ${i}`}
                  ref={
                    i === 0
                      ? firstMessageRef
                      : i === comments.length - 1
                      ? lastMessageRef
                      : undefined
                  }
                  className={styles.comment}
                >
                  {`${capitalizeFirstLetter(
                    comment.userName
                  )}: ${capitalizeFirstLetter(comment.title)}`}
                  {i === 1 && (
                    <div
                      className={[styles.scrollButton, styles.down]
                        .join(" ")
                        .trim()}
                    >
                      <Button
                        onClick={() => handleClickScroll("down", true)}
                        style={{
                          opacity: isScrollable ? 1 - scrollPercentage : 0,
                        }}
                      >
                        <Icon alt="down" icon={DownIcon} />
                      </Button>
                    </div>
                  )}
                  {i === comments.length - 1 && (
                    <div
                      className={[styles.scrollButton, styles.up]
                        .join(" ")
                        .trim()}
                    >
                      <Button
                        onClick={() => handleClickScroll("up", true)}
                        style={{
                          opacity: isScrollable ? scrollPercentage : 0,
                        }}
                      >
                        <Icon alt="up" icon={UpIcon} />
                      </Button>
                    </div>
                  )}
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className={styles.inputContainer}>
        <Input
          onKeyDown={(event) => newComment && keyboardSupport(event)}
          placeholder={`${t("components.commentsList.message")}...`}
          value={newComment}
          name="newComment"
          onChange={(value) => setNewComment(value)}
          loading={loading}
        />
        <Button onClick={() => submitComment()} disabled={!newComment}>
          <Icon alt="play" icon={PlayIcon} size="medium" />
        </Button>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.user.user,
  }),
  (dispatch) => ({
    addComment: ({ title, contentId, userName }) =>
      dispatch(commentsActions.addComment({ title, contentId, userName })),
  })
)(CommentsList);
