import Header from '../Header/Header';

import React, { useState, useEffect } from 'react';
// import '../../scss/DaoDashboard.scss'; // Import SASS file

const DaoDashboard: React.FC = () => {
    const [daoData, setDaoData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulating data fetching
        setTimeout(() => {
            const mockData = {
                name: 'Example DAO',
                membersCount: 100,
                treasury: '$1,000,000',
                proposals: [
                    { id: 1, title: 'Proposal 1', votes: 25 },
                    { id: 2, title: 'Proposal 2', votes: 18 },
                    { id: 3, title: 'Proposal 3', votes: 30 },
                ],
                // Add more fields as needed
            };
            setDaoData(mockData);
            setLoading(false);
        }, 1500); // Simulating a delay for loading effect
    }, []);

    if (loading) {
        return <div className="dao-dashboard">Loading...</div>;
    }

    return (
        <div className="dao-dashboard">
            <Header />
            <div className="dashboard-header">
                DAO Dashboard
            </div>

            <div className="dashboard-section">
                <div className="dashboard-section__title">General Information</div>
                <div className="dashboard-section__content">
                    <p>DAO Name: {daoData.name}</p>
                    <p>Members Count: {daoData.membersCount}</p>
                    <p>Treasury: {daoData.treasury}</p>
                </div>
            </div>

            <div className="dashboard-section">
                <div className="dashboard-section__title">Proposals</div>
                <div className="dashboard-section__content">
                    {daoData.proposals.map((proposal: any) => (
                        <div key={proposal.id}>
                            <p>{proposal.title}</p>
                            <p>Votes: {proposal.votes}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DaoDashboard;
