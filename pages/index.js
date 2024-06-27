import React, { useEffect, useState } from 'react';
import { fetchGoals } from '../services/unGoalsService';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const [goals, setGoals] = useState([]);

  const linkImages = [
    '',
  ];

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const getGoals = async () => {
      const data = await fetchGoals();
      if (Array.isArray(data)) {
        setGoals(data);
      } else {
        console.error('Expected an array of goals:', data);
      }
    };
    getGoals();
  }, []);


  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/2 border border-black">
          <h1 className="text-2xl text-center text-white bg-sky-700"> THE GOALS </h1>
          <div className="min-h-96 flex flex-col justify-normal bg-no-repeat bg-[url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500')]">
            <p className="ml-6 mt-20 mb-16 text-[40px] font-sans font-thin text-white">{goals.length} GOALS TO <br/>TRANSFORM OUR <br/>WORLD</p>
            <div className="flex flex-wrap">
              {goals.map((goal, index) => (
                <Link key={index} href={`/goal/${goal.code}`} className="w-1/2">
                  <div style={{ backgroundColor: generateRandomColor() }} className="m-2 min-h-80 text-2xl rounded-md  text-white p-4">
                  <p className="mt-2 flex justify-between font-normal text-pretty">
                      <span className="font-bold  text-[40px] mr-5">{goal.code}</span>
                      <span>{goal.title}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>  
      </div>
    </div>
  );
};

export default Home;
