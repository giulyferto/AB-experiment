import { useState } from "react";
import BrowseBy from "./buttons/BrowseBy/BrowseByButton";
import PopularTags from "./buttons/PopularTags/PopularTagsButton";
import SignUp from "./buttons/SignUp/SignUpButton";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import "./StickyBarStyles.css";

const StickyBar = () => {
  const [isOverOneWindowHeight, setIsOverOneWindowHeight] = useState(false);
  const [isOverBreakpoint, setIsOverBreakpoint] = useState(false);
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= windowHeight) {
      setIsOverOneWindowHeight(true);
    } else {
      setIsOverOneWindowHeight(false);
    }
  };
  const handleResize = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setIsOverBreakpoint(true);
    } else {
      setIsOverBreakpoint(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
  return (
    <div
      className="sticky-bar-container"
      style={{ marginRight: isOverOneWindowHeight ? "25em" : "30em" }}
    >
      <div className="bar-container">
        <BrowseBy isOverBreakpoint={isOverBreakpoint} />
        <PopularTags isOverBreakpoint={isOverBreakpoint} />
        <SignUp isOverBreakpoint={isOverBreakpoint} />
      </div>
      {isOverOneWindowHeight && (
        <div className="up-btn-container">
          <div
            className="up-btn"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <MdKeyboardDoubleArrowUp />
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyBar;
