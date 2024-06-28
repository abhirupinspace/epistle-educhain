import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import cancer from "../../assets/cancer.jpeg";
import '../../scss/ShowNewsSmall.scss';

interface ShowNewsSmallProps {
    title: string;
    description: string;
    voteCounts: string;
    timer: string;
}

const ShowNewsSmall: React.FC<ShowNewsSmallProps> = (props) => {
    return (
        <div className='showNewsSmall'>
            <img className='image' src={cancer} alt="News" />
            <div className="newsDetails">
                <div className="newsTitle">{props.title}</div>
                <div className="newsDescription">{props.description}</div>
            </div>
            <div className="voteCounts">{props.voteCounts} votes</div>
            <div className="action">
                <div className="votes">
                    <FaRegThumbsUp />
                    <FaRegThumbsDown />
                </div>
                <div className="review">
                    <div className="timer">{props.timer}</div>
                    <button className='reviewButton'>Review</button>
                </div>
            </div>
        </div>
    );
}

export default ShowNewsSmall;
