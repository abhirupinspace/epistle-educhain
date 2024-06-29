import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";
// import cancer from "../../assets/cancer.jpeg";
import '../../scss/ShowNewsSmall.scss';

interface ShowNewsSmallProps {
    _id: string;
    heading: string;
    subheading: string;
    description: string;
    genre: string;
    location: string;
    time: string;
    uploadMedia: string;
}

const ShowNewsSmall: React.FC<ShowNewsSmallProps> = (props) => {
    const [News, setNews] = useState<ShowNewsSmallProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getallarticles");
                response.data.forEach( element => {
                    const startTime = new Date(element.time);
                    const futureTime = new Date(startTime.getTime() + 20 * 60 * 1000);

                    // Function to calculate the time difference and update the countdown
                    function updateCountdown() {
                    const now = new Date();
                    const timeDifference = futureTime - now;
                    
                    if (timeDifference <= 0) {
                        clearInterval(countdownInterval);
                        return;
                    }

                    // Calculate minutes and seconds
                    const minutes = Math.floor(timeDifference / (1000 * 60));
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                    // Display the countdown
                    // document.getElementById('timed').innerHTML=;
                    console.log((`Time left: ${minutes}m ${seconds}s`));
                    
                    }
                });
                
                setNews(response.data);
            } catch (error) {
                toast.error("Failed to fetch articles.");
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
        const intervalId = setInterval(fetchData, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='showNewsSmall'>
            <ul>
                {News.map(articleData => (
                    <li key={articleData._id} className="articleItem">
                        {/* <img className="image" src={articleData.uploadMedia} alt="Article" /> */}
                        <div className="newsDetails">
                            <div className="newsTitle">{articleData.heading}</div>
                            <div className="newsDescription">{articleData.subheading}</div>
                            <Link to={'/news'}>Read more</Link>
                        </div>
                        {/* <div className="voteCount">{articleData.voteCount} votes</div> */}
                        <div className="action">
                            <div className="votes">
                                <FaRegThumbsUp />
                                <FaRegThumbsDown />
                            </div>
                            <div className="review">
                                <div className="timer" id="timed"></div>
                                <button className='reviewButton'>Review</button>
                            </div>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowNewsSmall;