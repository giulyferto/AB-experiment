import { FaHashtag } from "react-icons/fa";

interface BrowseByButtonProps {
  setIsHovering: (isHovering: boolean) => void;
  isOverBreakpoint: boolean;
}
const PopularTagsMenu = ({
  setIsHovering,
  isOverBreakpoint,
}: BrowseByButtonProps) => {
  const tagsData = [
    { name: "webdev", url: "https://dev.to/t/webdev" },
    { name: "javascript", url: "https://dev.to/t/javascript" },
    { name: "beginners", url: "https://dev.to/t/beginners" },
    { name: "programming", url: "https://dev.to/t/programming" },
    { name: "tutorial", url: "https://dev.to/t/tutorial" },
    { name: "react", url: "https://dev.to/t/react" },
    { name: "python", url: "https://dev.to/t/python" },
    { name: "devops", url: "https://dev.to/t/devops" },
    { name: "css", url: "https://dev.to/t/css" },
    { name: "aws", url: "https://dev.to/t/aws" },
    { name: "ai", url: "https://dev.to/t/ai" },
    { name: "productivity", url: "https://dev.to/t/productivity" },
    { name: "discuss", url: "https://dev.to/t/discuss" },
    { name: "opensource", url: "https://dev.to/t/opensource" },
    { name: "career", url: "https://dev.to/t/career" },
    { name: "typescript", url: "https://dev.to/t/typescript" },
    { name: "node", url: "https://dev.to/t/node" },
    { name: "news", url: "https://dev.to/t/news" },
    { name: "learning", url: "https://dev.to/t/learning" },
    { name: "java", url: "https://dev.to/t/java" },
    { name: "database", url: "https://dev.to/t/database" },
    { name: "security", url: "https://dev.to/t/security" },
    { name: "api", url: "https://dev.to/t/api" },
    { name: "machinelearning", url: "https://dev.to/t/machinelearning" },
    { name: "html", url: "https://dev.to/t/html" },
    { name: "testing", url: "https://dev.to/t/testing" },
    { name: "cloud", url: "https://dev.to/t/cloud" },
    { name: "android", url: "https://dev.to/t/android" },
    { name: "docker", url: "https://dev.to/t/docker" },
    { name: "php", url: "https://dev.to/t/php" },
  ];

  return (
    <div
      className="tags-menu"
      style={{
        minWidth: isOverBreakpoint ? "26em" : "32em",
        maxHeight: isOverBreakpoint ? "32em" : "26em",
        top: isOverBreakpoint ? "-31em" : "-23em",
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      {tagsData.map((tag, index) => (
        <div
          key={index}
          className="tag-menu-item"
          onClick={() => window.open(tag.url, "_blank")}
        >
          <FaHashtag />
          {tag.name}
        </div>
      ))}
    </div>
  );
};
export default PopularTagsMenu;
