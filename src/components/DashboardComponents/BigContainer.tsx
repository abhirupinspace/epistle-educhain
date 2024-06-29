import React from 'react';
import "../../scss/BigContainer.scss"
import { useNavigate } from 'react-router-dom';
interface BigContainerProps {
    name: string;
}

const BigContainer: React.FC<BigContainerProps> = ({ name }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (name === 'BROWSE NEWS') {
            navigate('/articleFarm');
        }
    };

    return (
        <div className='container' onClick={handleClick}>
            {name}
        </div>
    );
}

export default BigContainer;
