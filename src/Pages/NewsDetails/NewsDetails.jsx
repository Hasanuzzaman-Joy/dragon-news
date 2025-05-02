import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import RightSidePart from '../../Components/Aside/RightSidePart';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from './NewsCard';
import Loading from '../../Components/Loading';
import LatestNews from '../../Components/LatestNews/LatestNews';
import Navbar from '../../Components/Navbar/Navbar';

const NewsDetails = () => {

    const { id } = useParams();

    const newsData = useLoaderData();

    const [news, setNews] = useState(null)

    useEffect(() => {
        const singleData = newsData.find(news => news.id == id);
        setNews(singleData);
    }, [id, newsData])

    return (
        <div className='bg-white'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-8'>
                <section className='col-span-9'>
                    {news ? <NewsCard news={news} /> : <Loading></Loading>}
                </section>
                <aside className='col-span-3 my-12'>
                    <RightSidePart></RightSidePart>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;