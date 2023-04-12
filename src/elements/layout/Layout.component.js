import React from "react";

import styles from "./Layout.module.scss";
import Icon from "../../elements/icon/Icon.component";
import TiktokIcon from "../../assets/icons/tiktok.png";

const Layout = ({ children }) => {
  return (
    <div className={styles.component}>
      <div className={styles.headerComponent}>
        <a href="/">
          <Icon alt="tiktok" icon={TiktokIcon} size="big" />
        </a>
        <p className={styles.header}>Tik Tok</p>
      </div>
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
