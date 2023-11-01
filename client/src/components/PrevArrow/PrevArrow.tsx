import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="iconContiner iconLeft" onClick={() => onClick()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

export default PrevArrow;
