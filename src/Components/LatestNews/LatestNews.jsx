import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {

    return (
        <div className='w-11/12 mx-auto flex gap-2 bg-base-200 p-3'>
                <button className='btn btn-secondary border-none rounded-none'>Latest News</button>
            <Marquee speed={100}>
                <div className='flex'>
                    <div className='mr-14'>🛑 Breaking News: The government has announced a new economic stimulus package aimed at supporting small businesses affected by recent inflation. Experts say this move could boost market confidence and create thousands of new jobs in the upcoming quarter.</div>

                    <div className='mr-14'>🌍 International: Tensions continue to rise in the Middle East as diplomatic efforts stall. The United Nations has called for urgent dialogue between the involved nations to prevent further escalation and ensure regional stability.</div>

                    <div className='mr-14'>🏏 Sports: In a thrilling final match, the national cricket team clinched victory with a last-over six, securing their place in the upcoming World Cup. Fans across the country celebrated late into the night as fireworks lit up the sky.</div>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;