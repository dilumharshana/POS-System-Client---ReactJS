import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

//style
import { styles } from "./stocksStyles";

export const InputField = (props) => {
  const {
    accept,
    label,
    type,
    placeholder,
    name,
    value,
    onChange,
    onBlur,
    isInvalid,
    error,
  } = props;

  //style config
  const classes = styles()();

  return (
    <Form.Group className="position-relative mb-3">
      <Form.Label className={classes.formLabels}>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={isInvalid}
        accept={accept}
      />
      <Form.Control.Feedback type="invalid" tooltip placement="right">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
