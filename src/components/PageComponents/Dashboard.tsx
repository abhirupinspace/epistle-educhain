import React from 'react';
import '../../scss/Dashboard.scss';
import { Line } from 'react-chartjs-2';
import engagementData from '../../data/engagementData.json';
import BigContainer from '../DashboardComponents/BigContainer';
import SmallContainer from '../DashboardComponents/SmallContainer';
import Header from '../Header/Header';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard'>
      <Header />
      <div className='fullpage'>
        <div className='left'>
          <BigContainer name='BROWSE NEWS' quickFarm={false} />


          
          {
          /* <div className="lineChart">
            <Line
              className='lineChart'
              data={{
                labels: engagementData.map((data) => data.label),
                datasets: [
                  {
                    label: 'Engagement',
                    data: engagementData.map((data) => data.revenue),
                    backgroundColor: '#FFD101ff',
                    borderColor: '#FFD101ff',
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    display: true,
                    text: 'Monthly Revenue & Cost',
                  },
                },
              }}
            />
          </div> */
          }
        </div>
        <div className='right'>
          <BigContainer name='QUICK FARMING' quickFarm={true} />
          <div className='smallContainers'>
            <SmallContainer name='SUBMIT NEWS' />
            <SmallContainer name='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
