import React from 'react';
import '../../scss/Button.scss';

interface ButtonProps {
    name: string;
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <button className='button'>{props.name}</button>
        </>
    );
};

export default Button;
