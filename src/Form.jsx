import PropTypes from "prop-types";
import Button from "./Button";

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={(e) => e.prevent()}>
      <Button buttonText="users" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="posts" reqType={reqType} setReqType={setReqType} />
      <Button buttonText="comments" reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

Form.propTypes = {
  reqType: PropTypes.string.isRequired,
  setReqType: PropTypes.func.isRequired,
};

export default Form;
