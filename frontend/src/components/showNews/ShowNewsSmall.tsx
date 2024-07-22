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

                response.data.forEach((article: ShowNewsSmallProps) => {
                    const startTime = new Date(article.time);
                    const futureTime = new Date(startTime.getTime() + 2 * 60 * 1000);

                    const updateCountdown = () => {
                        const now = new Date();
                        const timeDifference = futureTime.getTime() - now.getTime();

                        if (timeDifference <= 0) {
                            setTimers(prevTimers => ({ ...prevTimers, [article._id]: 'Expired' }));
                            deleteExpiredArticles(article._id);
                            return;
                        }

                        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                        setTimers(prevTimers => ({
                            ...prevTimers,
                            [article._id]: `${hours}hr ${minutes}m ${seconds}s`
                        }));
                    };

                    updateCountdown();
                    const intervalId = setInterval(updateCountdown, 1000); // Update every second
                    setTimers(prevTimers => ({ ...prevTimers, [article._id]: intervalId.toString() }));
                });
            } catch (error) {
                toast.error("Failed to fetch articles.");
                console.error("Error fetching data:", error);
            }
        };

        const deleteExpiredArticles = async (articleId: string) => {
            try {
                await axios.delete(`http://localhost:8000/api/deletearticles/${articleId}`);
                setNews(prevNews => prevNews.filter(article => article._id !== articleId));
            } catch (error) {
                console.error('Error while deleting expired article:', error);
                toast.error('Failed to delete expired article.');
            }
        };

        fetchData();

        const interval = setInterval(async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getallarticles");
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching updated votes:", error);
            }
        }, 1000); // Fetch updates every second

        return () => {
            clearInterval(interval);
            Object.values(timers).forEach(timerId => clearInterval(parseInt(timerId)));
        };
    }, []);

    const handleUpVote = async (id: string) => {
        try {
            await axios.put(`http://localhost:8000/api/upvotearticles/${id}`);
            console.log('Upvote successful for article:', id);
        } catch (error) {
            console.error('Error while upvoting article:', error);
        }
    };

    const handleDownVote = async (id: string) => {
        try {
            await axios.put(`http://localhost:8000/api/downvotearticles/${id}`);
            console.log('Downvote successful for article:', id);
        } catch (error) {
            console.error('Error while downvoting article:', error);
        }
    };

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
