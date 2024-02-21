import ".//Main.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
function Main(MainText) {
  return (
    <div className="mainh">
      <div className="main">
        <div className="descripton">
          <div className="description-main">
            {MainText.MainText?.descriptionH1}
          </div>
          <div className="descripton-h5">
            {MainText.MainText?.descriptionH5}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
