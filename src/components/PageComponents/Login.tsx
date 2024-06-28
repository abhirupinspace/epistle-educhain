import React, { useState } from 'react';
import '../../scss/Login.scss';
import { ThirdwebProvider } from "thirdweb/react";
import { AutoConnect, ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { ConnectedWalletDetails } from 'thirdweb/dist/types/react/web/ui/ConnectWallet/Details';
import { client } from '../../client';
import Dashboard from './Dashboard';
// import { ConnectedWalletDetails } from 'thirdweb/dist/types/react/web/ui/ConnectWallet/Details';




const Login: React.FC = () => {
  return (
    <ThirdwebProvider>
    <div className='fullpageLogin'>
      <div className="leftLogin">
        <div className="nameLogin">AALOO</div>
        <div className="taglineLogin">
          VERIFY NEWS
          <br/>WIN REWARDS
        </div>
      </div>
      <div className="rightLogin">
        {/* <button>Login</button> */}
        <ConnectButton client={client}
        onConnect={Dashboard}/>
      </div>
    </div></ThirdwebProvider>
  );
};

export default Login;

