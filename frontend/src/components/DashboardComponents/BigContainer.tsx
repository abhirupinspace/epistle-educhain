import React from 'react';
import "../../scss/BigContainer.scss"
import { useNavigate } from 'react-router-dom';

interface BigContainerProps {
    name: string;
    firstNews?: {
        heading: string;
        subheading: string;
        time: string;
        _id: string;
    };
}

const BigContainer: React.FC<BigContainerProps> = ({ name, firstNews }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (name === 'BROWSE NEWS') {
            navigate('/articleFarm');
        }
    };

    const handleReadMore = () => {
        if (firstNews) {
            navigate(`/newsFullPage/${firstNews._id}`);
        }
    };

    return (
        <div className='container' onClick={handleClick}>
            {name}
            {name === 'QUICK FARMING' || firstNews && (
                <div className='quick-farming-news'>
                    <p>{firstNews.subheading}</p>
                    <p>{firstNews.time}</p>
                    <button onClick={handleReadMore} className='read-more-button'>
                        Read more
                    </button>
                </div>
            )}
        </div>
    );
}

export default BigContainer;


// import React, { useEffect, useState } from 'react';
// import '../../scss/BigContainer.scss';
// import { useNavigate } from 'react-router-dom';

// interface BigContainerProps {
//     name: string;
//     firstNews?: {
//         heading: string;
//         subheading: string;
//         time: string;
//         _id: string;
//     };
// }

// const BigContainer: React.FC<BigContainerProps> = ({ name, firstNews }) => {
//     const navigate = useNavigate();
//     const [currentTime, setCurrentTime] = useState<string>('');

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             const now = new Date();
//             setCurrentTime(formatTime(now));
//         }, 1000);

//         return () => clearInterval(intervalId);
//     }, []);

//     const handleClick = () => {
//         if (name === 'BROWSE NEWS') {
//             navigate('/articleFarm');
//         }
//     };

//     const handleReadMore = () => {
//         if (firstNews) {
//             navigate(`/newsFullPage/${firstNews._id}`);
//         }
//     };

//     const formatTime = (time: Date): string => {
//         const hours = time.getHours().toString().padStart(2, '0');
//         const minutes = time.getMinutes().toString().padStart(2, '0');
//         const seconds = time.getSeconds().toString().padStart(2, '0');
//         return `${hours}:${minutes}:${seconds}`;
//     };

//     return (
//         <div className='container' onClick={handleClick}>
//             {name}
//             {name === 'QUICK FARMING' && firstNews && (
//                 <div className='quick-farming-news'>
//                     <h2>{firstNews.heading}</h2>
//                     <p>{firstNews.subheading}</p>
//                     <p>{currentTime}</p>
//                     <button onClick={handleReadMore} className='read-more-button'>
//                         Read more
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default BigContainer;
