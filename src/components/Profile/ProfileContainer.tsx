import React from "react";
import '../../scss/ProfileContainer.scss';
import sounak from '../../assets/Sounak.jpg';

const ProfileContainer: React.FC = () => {
    return (
        <div className="profileContainer">
            <div className="profileLeft">
                <div className="profileDetailsUpper">
                    <div className="upperLeft">
                        <div className="name">SOUNAK DEY</div>
                        <div className="userId">@dragoon25810</div>
                    </div>
                    <img className="upperRightImg" src={sounak} alt="Profile" />
                </div>
            </div>
            <div className="profileRight"></div>
        </div>
    );
};

export default ProfileContainer;
