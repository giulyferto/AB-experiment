import { useState } from "react";
import { FaHashtag } from "react-icons/fa";
import PopularTagsMenu from "./PopularTagsMenu";

interface PopularTagsProps {
  isOverBreakpoint: boolean;
}

const PopularTags = ({ isOverBreakpoint }: PopularTagsProps) => {
  const [isTagsButtonHovering, setIsTagsButtonHovering] = useState(false);
  return (
    <div>
      <div
        className="btn-container"
        onMouseEnter={() => setIsTagsButtonHovering(true)}
        onMouseLeave={() => setIsTagsButtonHovering(false)}
      >
        <div className="btn-title-container">
          <div className="icon">
            <FaHashtag />
          </div>
          {!isOverBreakpoint && <div className="text">Popular Tags</div>}
        </div>
      </div>
      {isTagsButtonHovering && (
        <div
          className="tags-menu-wrapper"
          onMouseEnter={() => setIsTagsButtonHovering(true)}
          onMouseLeave={() => setIsTagsButtonHovering(false)}
        >
          <PopularTagsMenu
            setIsHovering={setIsTagsButtonHovering}
            isOverBreakpoint={isOverBreakpoint}
          />
        </div>
      )}
      <div
        className="sub-menu-bridge"
        onMouseEnter={() => setIsTagsButtonHovering(true)}
      />
    </div>
  );
};

export default PopularTags;
