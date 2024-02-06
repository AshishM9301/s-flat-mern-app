import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextArrow = (props: any) => {
  const { onClick } = props;

  return (
    <div onClick={() => onClick()} className="iconContiner iconRight">
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default NextArrow;
