import { BsArrowDownUp } from "react-icons/bs";
import BrowseByMenu from "./BrowseByMenu";
import { useState } from "react";
interface BrowseByProps {
  isOverBreakpoint: boolean;
}
const BrowseBy = ({ isOverBreakpoint }: BrowseByProps) => {
  const [isBrowseButtonHovering, setIsBrowseButtonHovering] = useState(false);
  return (
    <div>
      <div
        className="btn-container"
        onMouseEnter={() => setIsBrowseButtonHovering(true)}
        onMouseLeave={() => setIsBrowseButtonHovering(false)}
      >
        <div className="btn-title-container">
          <div className="icon">
            <BsArrowDownUp />
          </div>
          {!isOverBreakpoint && <div className="text">Browse by</div>}
        </div>
      </div>
      {isBrowseButtonHovering && (
        <div
          className="browse-menu-wrapper"
          onMouseEnter={() => setIsBrowseButtonHovering(true)}
          onMouseLeave={() => setIsBrowseButtonHovering(false)}
        >
          <BrowseByMenu setIsHovering={setIsBrowseButtonHovering} />
        </div>
      )}
    </div>
  );
};

export default BrowseBy;
