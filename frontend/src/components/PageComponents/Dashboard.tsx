import React, { useEffect, useState } from "react";
import '../../scss/Dashboard.scss';
import { Line } from 'react-chartjs-2';
import { Chart, registerables, CategoryScale } from 'chart.js';
Chart.register(...registerables, CategoryScale);

import engagementData from '../../data/engagementData.json';
import BigContainer from '../DashboardComponents/BigContainer';
import SmallContainer from '../DashboardComponents/SmallContainer';
import Header from '../Header/Header';

import axios from "axios";
import toast from "react-hot-toast";

interface ShowNewsSmallProps {
  _id: string;
  heading: string;
  subheading: string;
  description: string;
  genre: string;
  location: string;
  time: string;
  upVote: number;
  downVote: number;
}

const Dashboard: React.FC = () => {
  const [News, setNews] = useState<ShowNewsSmallProps[]>([]);
  const [timers, setTimers] = useState<{ [key: string]: string }>({});

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get("http://localhost:8000/api/getallarticles");
              setNews(response.data);

              response.data.forEach((article: ShowNewsSmallProps) => {
                  const startTime = new Date(article.time);
                  const futureTime = new Date(startTime.getTime() + 10 * 60 * 1000);

                  const updateCountdown = () => {
                      const now = new Date();
                      const timeDifference = futureTime.getTime() - now.getTime();

                      if (timeDifference <= 0) {
                          setTimers(prevTimers => ({ ...prevTimers, [article._id]: 'Expired' }));
                          deleteExpiredArticles(article._id);
                          return;
                      }

                      const hours = Math.floor(timeDifference / (1000 * 60 * 60));
                      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                      setTimers(prevTimers => ({
                          ...prevTimers,
                          [article._id]: `${hours}hr ${minutes}m ${seconds}s`
                      }));
                  };

                  updateCountdown();
                  const intervalId = setInterval(updateCountdown, 1000); // Update every second
                  setTimers(prevTimers => ({ ...prevTimers, [article._id]: intervalId.toString() }));
              });
          } catch (error) {
              toast.error("Failed to fetch articles.");
              console.error("Error fetching data:", error);
          }
      };

      fetchData();

      return () => {
          Object.values(timers).forEach(timerId => clearInterval(parseInt(timerId)));
      };
  }, [timers]);

  const deleteExpiredArticles = async (id: string) => {
    try {
      await axios.delete(`http://localhost:8000/api/deletearticles/${id}`);
      setNews(prevNews => prevNews.filter(article => article._id !== id));
    } catch (error) {
      console.error('Error deleting expired article:', error);
    }
  };

  const firstNews = News.length > 0 ? News[0] : null;

  return (
    <div className='dashboard'>
      <Header />
      <div className='fullpage'>
        <div className='left'>
          <BigContainer name='BROWSE NEWS' />
          <div className="lineChart">
            <Line
              className='lineChart'
              data={{
                labels: engagementData.map((data) => data.label),
                datasets: [
                  {
                    label: 'Engagement',
                    data: engagementData.map((data) => data.revenue),
                    backgroundColor: '#0003FF',
                    borderColor: '#000',
                    fill: false
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
                    text: 'Monthly Reviews',
                    fullSize: true
                  },
                },
                layout: {
                  padding: 20
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                }
              }}
            />
          </div>
        </div>
        <div className='right'>
          {firstNews ? (
            <BigContainer name={firstNews.heading} firstNews={firstNews} />
          ) : (
            <div className='no-news'>No News Available Right Now</div>
          )}
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
