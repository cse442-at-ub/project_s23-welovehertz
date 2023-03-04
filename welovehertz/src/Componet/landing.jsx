import "./styles/landing.css";

//Router
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  return (
    <div id="landing">
      <h1>Welcome to Rating UB Housing Page</h1>
      <hr />
      <div id="homePage">
        <button
          className="button"
          onClick={(e) => {
            navigate("/login");
          }}
        >
          Login
        </button>
        <button
          className="button"
          onClick={(e) => {
            navigate("/RegistrationPage");
          }}
        >
          Registration Page
        </button>
        <button
          className="button"
          onClick={(e) => {
            navigate("/ResidentialPage");
          }}
        >
          Residential Page
        </button>
      </div>
    </div>
  );
};

export default Landing;
