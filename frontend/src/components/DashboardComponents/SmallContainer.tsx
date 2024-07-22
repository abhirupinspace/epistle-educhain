import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/SmallContainer.scss'
interface SmallContainerProps {
  name: string;
}

const SmallContainer: React.FC<SmallContainerProps> = ({ name }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (name === 'SUBMIT NEWS') {
      navigate('/submitArticle');
    }
  };

  return (
    <div className='smallContainer' onClick={handleClick}>
      {name}
    </div>
  );
}

export default SmallContainer;
