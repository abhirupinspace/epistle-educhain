import React from "react";
import "../../scss/ProfileContainer.scss";
import sounak from "../../assets/Sounak.jpg";

import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SmallContainer from "../DashboardComponents/SmallContainer";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import engagementData from '../../data/engagementData.json';

const ProfileContainer: React.FC = () => {
    return (
        <div className="profileContainer">
            <div className="profileLeft">
                <div className="profileDetailsUpper">
                    <div className="upperLeft">
                        <div className="name">SOUNAK DEY</div>
                        <div className="userId">@dragoon25810</div>
                    </div>
                    <img className="upperRightImg" src={sounak} alt="" srcSet="" />
                </div>
                <div className="icon">
                    <FaXTwitter />
                    <FaLinkedinIn />
                    <FaYoutube />
                </div>
                <div className="profileAbout">
                    I am a certified white chigga. I spread fake news and bang dipan. I
                    love huge docks and potatoes. I eat javascript for breakfast. I attend
                    all superteam irl calls. i like kdis below 12.
                </div>
                <button>Edit Profile</button>
            </div>
            <div className="profileRight">
                <div className="lineChart">
                    <Line
                        className='lineChart'
                        data={{
                            labels: engagementData.map((data) => data.label),
                            datasets: [
                                {
                                    label: 'Engagement',
                                    data: engagementData.map((data) => data.revenue),
                                    backgroundColor: 'rgba(0, 0, 0, 0)',
                                    borderColor: '#FFD101ff',
                                    fill: false
                                },
                            ],
                        }}
                        options={{
                            elements: {
                                line: {
                                    tension: 0.5,
                                },
                            },
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Monthly Reviews',
                                    fullSize: true
                                },
                            },
                            layout: {
                                padding: 20
                            },
                            scales: {
                                x: {
                                    grid: {
                                        display: false
                                    }
                                },
                                y: {
                                    grid: {
                                        display: false
                                    }
                                }
                            }
                        }}
                    />
                </div>
                <div className="rewards">
                    <SmallContainer />
                    <SmallContainer />
                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;