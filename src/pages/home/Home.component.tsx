import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import Card from "../../components/card";
import { detail } from "../../constants/paths";
import styles from "./Home.module.scss";
import { Props } from "./Home.types";

const Home = ({ contents }: Props) => {
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
                content={content}
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
