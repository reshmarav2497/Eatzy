import { CLOUDINARY_URL_PREFIX } from "../utils/constants.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-solid-svg-icons";

const RestCard = (props) => {
  const { name, avgRating, cuisines, cloudinaryImageId, costForTwo, sla } =
    props?.resData?.info;

  return (
    <div className="cardCont">
      <div className="restImgCont">
        <img
          className="restImg"
          alt="restImg"
          src={CLOUDINARY_URL_PREFIX + cloudinaryImageId}
        />
      </div>
      <div className="restDeatils">
        <div className="rest-name">{name}</div>
        <div className="rest-rating-cost">
          <div className="rating-div">
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: "green", width: "15px" }}
            />
            <div className="resRating">{avgRating}</div>
          </div>
          <div className="costForTwo">&bull; {costForTwo}</div>
        </div>
        <div className="cuisineType">{cuisines.join(", ")}</div>
        <div className="devivery-time">
          <FontAwesomeIcon icon={faClock} />
          <div className="del-time">{sla.slaString}</div>
        </div>
      </div>
    </div>
  );
};

export default RestCard;
