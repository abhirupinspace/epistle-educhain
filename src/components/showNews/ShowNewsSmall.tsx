import axios from 'axios';
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../../scss/ShowNewsSmall.scss';

interface ShowNewsSmallProps {
    _id: string;
    heading: string;
    subheading: string;
    description: string;
    genre: string;
    location: string;
    time: string;
    upVote: number;
    downVote: number;
}

const ShowNewsSmall: React.FC<ShowNewsSmallProps> = (props) => {
    const [News, setNews] = useState<ShowNewsSmallProps[]>([]);
    const [timers, setTimers] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getallarticles");
                setNews(response.data);
                
                response.data.forEach((element: ShowNewsSmallProps) => {
                    const startTime = new Date(element.time);
                    const futureTime = new Date(startTime.getTime() + 60 * 60 * 1000);
                    
                    const updateCountdown = () => {
                        const now = new Date();
                        const timeDifference = futureTime.getTime() - now.getTime();
                        
                        if (timeDifference <= 0) {
                            setTimers(prevTimers => ({ ...prevTimers, [element._id]: 'Expired' }));
                            return;
                        }

                        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                        setTimers(prevTimers => ({
                            ...prevTimers,
                            [element._id]: `${hours}hr ${minutes}m ${seconds}s`
                        }));
                    };

                    updateCountdown();
                    const intervalId = setInterval(updateCountdown, 1000); // Update every second
                    setTimers(prevTimers => ({ ...prevTimers, [element._id]: intervalId.toString() }));
                });
            } catch (error) {
                toast.error("Failed to fetch articles.");
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
        
        return () => {
            Object.values(timers).forEach(timerId => clearInterval(parseInt(timerId)));
        };
    }, []);

    const handleUpVote = async (id: string) => {
        try {
            await axios.put(`http://localhost:8000/api/upvotearticles/${id}`);
            // Optionally update state or perform other actions after successful request
            console.log('Upvote successful for article:', id);
        } catch (error) {
            console.error('Error while upvoting article:', error);
            // Handle errors as needed
        }
    };

    const handleDownVote = async (id: string) => {
        try {
            await axios.put(`http://localhost:8000/api/downvotearticles/${id}`);
            // Optionally update state or perform other actions after successful request
            console.log('Downvote successful for article:', id);
        } catch (error) {
            console.error('Error while downvoting article:', error);
            // Handle errors as needed
        }
    };
    // if(News.upVote ==undefined){
    //     articleData.upVote = 0;
    // }
    // else if(News.downVote ==undefined){
    //     articleData.downVote = 0;
    // }


    return (
        <div className='showNewsSmall'>
            <ul>
                {News.map(articleData => (
                    <li key={articleData._id} className="articleItem">
                        <div className="newsDetails">
                            <div className="newsTitle">{articleData.heading}</div>
                            <div className="newsDescription">{articleData.subheading}</div>
                            <Link to={'/newsFullPage'}>Read more</Link>
                        </div>
                        <div className="votes">
                            {articleData.upVote + articleData.downVote} Votes
                        </div>
                        <div className="action">
                            <div className="votes">
                                <FaRegThumbsUp onClick={() => handleUpVote(articleData._id)} />
                                <FaRegThumbsDown onClick={() => handleDownVote(articleData._id)} />
                            </div>
                            <div className="review">
                                <div className="timer" id="timed">{timers[articleData._id]}</div>
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
