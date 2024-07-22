import React, { useState } from 'react';
import '../../scss/Login.scss';
import { ThirdwebProvider } from "thirdweb/react";
import { AutoConnect, ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ConnectedWalletDetails } from 'thirdweb/dist/types/react/web/ui/ConnectWallet/Details';
import { client } from '../../client';
import Dashboard from './Dashboard';
// import { ConnectedWalletDetails } from 'thirdweb/dist/types/react/web/ui/ConnectWallet/Details';
import { FaArrowRight } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      
          navigate('/dashboard');
      
  };


  return (
    <ThirdwebProvider>
    <div className='fullpageLogin'>
      <div className="leftLogin">
        <div className="nameLogin">EPISTLE.</div>
        <div className="taglineLogin">
        Tokenized Trust in Every Story
        </div>
      </div>
      <div className="rightLogin">
        <ConnectButton client={client}
        onConnect={Dashboard}/>
        <button className='btn2' onClick={handleClick}> Continue <FaArrowRight/> </button>
      </div>
    </div></ThirdwebProvider>
  );
};

export default Login;

