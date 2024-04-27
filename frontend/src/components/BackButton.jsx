import { useNavigate } from "react-router";

const BackButton = (props) => {
  const navigator = useNavigate();
  const goBackHandler = () => {
    if (props?.goBackHandler) {
      props.goBackHandler();
      return;
    }
    navigator(-1);
  };
  return (
    <span onClick={goBackHandler} className="material-symbols-outlined">
      arrow_back
    </span>
  );
};

export default BackButton;
