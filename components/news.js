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
    <div className="flex flex-wrap justify-center">
      {newsArray.map((news, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
            <p className="text-base text-gray-600 mb-2">{news.outlet}</p>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">{news.title}</h2>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InTheNews;