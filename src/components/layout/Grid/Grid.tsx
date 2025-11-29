import type { ReactNode } from "react";
import styles from "./Grid.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Grid = ({ children, className }: Props) => {
  return <div className={`${styles.grid} ${className ?? ""}`}>{children}</div>;
};

