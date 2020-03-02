import React, { FC, ChangeEvent } from "react";
import "./form-input.styles.scss";

interface IFormInput extends React.HTMLProps<HTMLInputElement> {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: any;
}

const FormInput: FC<IFormInput> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value?.toString().length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
