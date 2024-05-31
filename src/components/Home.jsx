import React, { useState, useEffect } from 'react';
import './App.css';
import vist from '../assets/images/vist.jpeg'; 
import air from '../assets/images/Air Ticketing.jpg'; 

const ContentSection = () => {
  const [contentIndex, setContentIndex] = useState(0);

  const contentArray = [
    {
      text: (
        <>
          <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">Explore the World</h1>
          <p className="my-4 text-xl text-black">Travel Beyond Boundaries!</p>
          <p className="my-4 text-xl text-black">Dolor sit amet consectetur adipisicing elit. Non alias eum, suscipit expedita corrupti officiis debitis possimus nam laudantium beatae quidem dolore consequuntur voluptate rem reiciendis, omnis sequi harum earum.
                                        </p>
          <h5 class="mb-4">WorldWide Tours</h5>
                                        <p class="mb-0"></p>
        </>
      ),
      bgImage: `url(${air})`,
    },
    {
      text: <>
      <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">DISCOVER NEW PLACES</h1>
      <p className="my-4 text-xl text-black">Travel Beyond Boundaries!</p>
      <p className="my-4 text-black">Experience the beauty of uncharted destinations with our exclusive travel packages tailored for adventurers.</p>
    </>,
      bgImage: `url(${vist})`,
    },
    {
      text: <>
      <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">CREATE MEMORIES</h1>
      <p className="my-4 text-xl text-black">Your Journey Begins Here!</p>
      <p className="my-4 text-black">Join us in creating unforgettable moments with our expertly curated tours and travel services.</p>
    </>,
      bgImage: `url(${air})`,
     
    },
    
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex(prevIndex => (prevIndex + 1) % contentArray.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [contentArray.length]);

  return (
    <div
      className="h-screen w-full flex items-center justify-center"
      style={{ 
        backgroundImage: contentArray[contentIndex].bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center">
        {contentArray[contentIndex].text}
      </div>
    </div>
  );
};

export default ContentSection;
