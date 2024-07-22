import React from 'react';
import Header from '../Header/Header';
import ProfileContainer from '../Profile/ProfileContainer';

const Profile: React.FC = () => {
    return (
        <div className='profile'>
            <Header />
            <ProfileContainer />
        </div>
    );
};

export default Profile;
