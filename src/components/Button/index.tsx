import { ComponentProps } from "react";
import styles from "./button.module.scss";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props} />
  );
};
