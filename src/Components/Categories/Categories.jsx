import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router';
import CategoryNews from './CategoryNews';
import { useLoaderData } from 'react-router';

const Categories = () => {
    const { id } = useParams();
    const parseId = parseInt(id);

    const newsData = useLoaderData();

    const [newNews, setNewNews] = useState([])

    useEffect(() => {

        if (parseId === 0) {
            setNewNews(newsData)
        }
        else if (parseId === 1) {
            const getNews = newsData.filter(news => news.others.is_today_pick === true);
            setNewNews(getNews);
        }
        else {
            const getNews = newsData.filter(news => news.category_id === parseId);
            setNewNews(getNews);
        }
    }, [newsData, parseId])

    return (
        <div>
            <h1>Total news found - {newNews.length}</h1>
            {
                newNews.map(news => <CategoryNews key={news.id} news={news}></CategoryNews>)
            }
        </div>
    );
};

export default Categories;