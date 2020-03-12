import React, { FC, ButtonHTMLAttributes } from "react";
import "./custom-button.styles.scss";

interface ICustomButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const CustomButton: FC<ICustomButton> = ({ title, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {title}
    </button>
  );
};

export default CustomButton;
