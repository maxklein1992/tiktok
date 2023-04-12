import React from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import Card from "../../components/card";
import { detail } from "../../constants/paths";
import styles from "./Home.module.scss";

const Home = ({ contents }) => {
  const navigate = useNavigate();

  const goToVideo = ({ id }) => {
    navigate(detail, { state: { id: id } });
  };
  return (
    <div className={styles.component}>
      <div className={styles.contentsOverview}>
        {contents &&
          contents.map((content) => {
            return (
              <Card
                key={`content: ${content.title}`}
                onClick={() => goToVideo({ id: content.id })}
                id={content.id}
                youtubeId={content.youtubeId}
              />
            );
          })}
      </div>
    </div>
  );
};

export default connect((state) => ({
  contents: state.contents.contents,
}))(Home);
