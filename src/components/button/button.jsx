import classNames from "classnames";
import styles from "./button.module.css";
import { useContext } from "react";
import { ThemeContext } from "../theme-provider";

export const Button = ({
  title,
  onClick,
  disabled,
  className,
  sizeViewVariant = "xl",
  colorViewVariant = "active",
}) => {
  console.log(styles);
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={classNames(
        className,
        styles.root,
        // disabled && styles.disabled,
        {
          [styles.disabled]: disabled,
          [styles.xl]: sizeViewVariant === "xl",
          [styles.l]: sizeViewVariant === "l",
          [styles.dark]: theme === "dark",
          [styles.light]: theme === "light",
        },
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
