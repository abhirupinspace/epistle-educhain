import React from 'react';
import "../../scss/BigContainer.scss"

interface BigContainerProps {
    name: string;
    quickFarm: boolean;
}

const BigContainer: React.FC<BigContainerProps> = ({ name, quickFarm }) => {
    return (
        <div className='container'>
            <div className="name">{name}</div>
            {quickFarm && <div>TIME LEFT: 00:03:21</div>}
        </div>
    );
};

export default BigContainer;
