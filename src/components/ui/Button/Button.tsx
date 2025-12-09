import React from "react";
import classNames from 'classnames';
import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "soft" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  size = "md",
  disabled = false,
  rightIcon,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[variant],
        styles[size],
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.label}>{children}</span>

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};
