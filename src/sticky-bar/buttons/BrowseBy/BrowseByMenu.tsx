import { BsStar } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

interface BrowseByButtonProps {
  setIsHovering: (isHovering: boolean) => void;
}
const BrowseByMenu = ({ setIsHovering }: BrowseByButtonProps) => {
  return (
    <div className="browse-menu" onMouseLeave={() => setIsHovering(false)}>
      <div
        className="browse-menu-btn btn-title-container"
        onClick={() => window.open("https://dev.to/", "_blank")}
      >
        <div className="icon">
          <BsStar />
        </div>
        Relevant
      </div>

      <div
        className="browse-menu-btn btn-title-container"
        onClick={() => window.open("https://dev.to/latest", "_blank")}
      >
        <div className="icon">
          <BsCalendar3 />
        </div>
        Latest
      </div>

      <div
        className="browse-menu-btn btn-title-container"
        onClick={() => window.open("https://dev.to/top/week", "_blank")}
      >
        <div className="icon">
          <BsHeart />
        </div>
        Top
      </div>
      <div className="frequency-options">
        <div
          className="frequency-btn"
          onClick={() => window.open("https://dev.to/top/week", "_blank")}
        >
          Week
        </div>
        <div
          className="frequency-btn"
          onClick={() => window.open("https://dev.to/top/month", "_blank")}
        >
          Month
        </div>
        <div
          className="frequency-btn"
          onClick={() => window.open("https://dev.to/top/year", "_blank")}
        >
          Year
        </div>
        <div
          className="frequency-btn"
          onClick={() => window.open("https://dev.to/top/infinity", "_blank")}
        >
          Infinity
        </div>
      </div>
    </div>
  );
};
export default BrowseByMenu;
