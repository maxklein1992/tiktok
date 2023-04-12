import React from "react";
import type { ReactNode } from "react";

import styles from "./Layout.module.scss";
import Icon from "../icon";
import TiktokIcon from "../../assets/icons/tiktok.png";

export type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
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
