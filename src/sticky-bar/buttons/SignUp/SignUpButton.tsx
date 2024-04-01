import { BsBoxArrowInRight } from "react-icons/bs";

interface SignUpProps {
  isOverBreakpoint: boolean;
}
const SignUp = ({ isOverBreakpoint }: SignUpProps) => {
  return (
    <div
      className="btn-container"
      onClick={() =>
        window.open("https://dev.to/enter?state=new-user", "_blank")
      }
    >
      <div className="btn-title-container">
        <div className="icon">
          <BsBoxArrowInRight />
        </div>
        {!isOverBreakpoint && <div className="text">Sign Up</div>}
      </div>
    </div>
  );
};

export default SignUp;
