import React from 'react';
const newsArray = [
    { title: 'Breaking News 1', outlet: 'CNN', link: 'https://www.cnn.com/' },
    { title: 'Latest Update 1', outlet: 'BBC', link: 'https://www.bbc.com/' },
    { title: 'Top Story 1', outlet: 'Fox News', link: 'https://www.foxnews.com/' },
    { title: 'Featured Article 1', outlet: 'The New York Times', link: 'https://www.nytimes.com/' },
    { title: 'Exclusive Interview 1', outlet: 'Reuters', link: 'https://www.reuters.com/' },
  ];
  
const InTheNews = () => {
  return (
    <>
    <div className="h-[5px] bg-gradient-to-r from-rose-600 to-rose-900"></div>
      <h3 className="bg-[#121212] p-6 text-2xl md:text-3xl text-center lg:text-5xl font-black uppercase">
    In the news</h3>
    <div className="flex flex-wrap w-full bg-[#121212] font-ysabeau">

      {newsArray.map((news, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
          <div className="hover:shadow p-6 h-full flex flex-col justify-evenly">
            <p className="text-base text-gray-600 mb-2">{news.outlet}</p>
            <h2 className="text-xl sm:text-4xl font-black mb-4 text-white">{news.title}</h2>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default InTheNews;
