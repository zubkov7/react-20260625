import styles from "./tab.module.css";
import { Button } from "../button/button";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <Button
      className={styles.root}
      disabled={isActive}
      onClick={onClick}
      title={title}
    />
  );
};
