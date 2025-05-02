import { Link } from "react-router";
import React from "react";

const CategoryNews = ({ news }) => {
  // Format the date as "Thursday, 01 May, 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'long', 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-2xl mx-auto my-6 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      {/* Header with author and date */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{news.author.name}</span>
          <span>{formatDate(news.author.published_date)}</span>
        </div>
      </div>
      
      {/* News content */}
      <div className="p-4">
        {/* News title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {news.title}
        </h3>
        
        {/* News category */}
        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-3">
          {news.category_id === 2 ? "BUSINESS" : 
           news.category_id === 3 ? "TECHNOLOGY" :
           news.category_id === 4 ? "HEALTH" :
           news.category_id === 5 ? "SPORTS" :
           news.category_id === 6 ? "ENTERTAINMENT" :
           news.category_id === 7 ? "SCIENCE" :
           news.category_id === 8 ? "POLITICS" : "NEWS"}
        </span>
        
        {/* News meta - date and tags */}
        <div className="text-xs text-gray-500 mb-3">
          <span>{formatDate(news.author.published_date)}</span>
          <span className="ml-1">| Tag Cloud Tags: {news.tags.join(", ")}</span>
        </div>
        
        {/* News excerpt */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {news.details}
        </p>
        
        {/* Read more link */}
        <Link to={`/news-details/${news.id}`} className="text-blue-600 text-sm font-semibold hover:underline">
          Read More
        </Link>
      </div>
      
      {/* Footer with rating and shares */}
      <div className="px-4 py-2 border-t border-gray-100 flex justify-between text-sm">
        <div className="text-yellow-400">
          {"⭐".repeat(Math.floor(news.rating.number))} <span className="text-gray-700 ml-1">{news.rating.number.toFixed(1)}</span>
        </div>
        <div className="text-gray-500">
          🔄 <span className="text-gray-700 ml-1">{news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;