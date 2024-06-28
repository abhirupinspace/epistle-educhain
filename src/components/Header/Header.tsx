import React from 'react';
import '../../scss/Header.scss';
import Button from '../DashboardComponents/Button';
import { ThirdwebProvider } from 'thirdweb/dist/types/react/core/providers/thirdweb-provider';
import { AutoConnect, ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from '../../client';
import { UserWalletStatus } from 'thirdweb/dist/types/wallets/in-app/core/authentication/type';



const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className='title'>AALOO</div>
      <div className='buttons'>
        <Button name='Proposals' />
        <Button name='Profile' />
        <ConnectButton client={client} />
      </div>
    </div>
  );
};

export default Header;
