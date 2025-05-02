import React from 'react';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {

    const { title, image_url, details, category_id, tags } = news;

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
        <div className='bg-white shadow-md rounded p-6 my-12' style={{
            boxShadow: '0 -6px 12px rgba(0, 0, 0, 0.06), 0 6px 12px rgba(0, 0, 0, 0.1)',
        }}>
            <h2 className='text-xl font-semibold mb-4 text-[#000000]'>
                {
                    category_id === 2 ? "BUSINESS" :
                        category_id === 3 ? "TECHNOLOGY" :
                            category_id === 4 ? "HEALTH" :
                                category_id === 5 ? "SPORTS" :
                                    category_id === 6 ? "ENTERTAINMENT" :
                                        category_id === 7 ? "SCIENCE" :
                                            category_id === 8 ? "POLITICS" : "NEWS"
                }
            </h2>

            <img
                src={image_url}
                alt={title}
                className='w-full h-auto rounded mb-6'
            />

            <h3 className='text-2xl font-bold text-[#525252] mb-3 leading-snug'>
                {title}
            </h3>

            <div className='flex text-sm text-accent'>
                <div>
                    <h1>{formatDate(news.author.published_date)} |</h1>
                </div>
                <div className='ml-1 flex gap-2'>
                    Tag Cloud Tags: {
                        tags.map((tag, index) => <h1 className='flex gap-5' key={index}>{tag}</h1>)
                    }
                </div>
            </div>

            <p className='text-base text-accent mt-5 mb-5 leading-8'>
                {details}
            </p>

            <Link
                to={`/`}
                className='inline-block bg-pink-600 text-white text-sm font-medium px-5 py-2 rounded hover:bg-pink-700 transition'
            >
                ← All news in this category
            </Link>
        </div>
    );
};

export default NewsCard;
