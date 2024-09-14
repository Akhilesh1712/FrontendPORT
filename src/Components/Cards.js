import "./Cards.css";
import image from "../assets/images.jpg"; // Ensure this path is correct
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <div className="card-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={image} alt="Project 1" />
                <h2 className="project-title">CryptoNigh</h2>
                <div className="pro-details">
                    <p>Built application to recommend crypto ,added buy/shell recommendation and
                    recommendation is cutomizable according to user.</p>
                    <div className="btn0-container">
                        <NavLink to="https://github.com/Akhilesh1712/Trading-Crypto-Stocks-Recommendation" className="btn0">View Project</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={image} alt="Project 1" />
                <h2 className="project-title">VISION S SOFTWARE</h2>
                <div className="pro-details">
                    <p>Created software for impaired person, added smart user appointments and drugs recommendation
                    with patient data analysis</p>
                    <div className="btn0-container">
                        <NavLink to="https://github.com/Akhilesh1712/ForImpaired" className="btn0">View Project</NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={image} alt="Project 1" />
                <h2 className="project-title">Twetterix</h2>
                <div className="pro-details">
                    <p>Built fullstack Twitter(X) app with Tanstack for post recommendation accoding to user</p>
                    <div className="btn0-container">
                        <NavLink to="https://github.com/Akhilesh1712/Mern-Twitter-With-Post-Recommendation" className="btn0">View Project</NavLink>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  );
};

export default Cards;
