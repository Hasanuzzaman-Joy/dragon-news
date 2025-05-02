import React, { Suspense } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Components/LatestNews/LatestNews';
import Navbar from '../Components/Navbar/Navbar';
import LeftSidePart from '../Components/Aside/LeftSidePart';
import RightSidePart from '../Components/Aside/RightSidePart';
import Loading from '../Components/Loading';

const MainLayout = () => {
    return (
        <div className='bg-white'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
                <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-10 mt-14'>
                <section className="left-side col-span-3">
                    <Suspense fallback={<Loading></Loading>}>
                        <LeftSidePart></LeftSidePart>
                    </Suspense>
                </section>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <section className="right-side col-span-3">
                    <RightSidePart></RightSidePart>
                </section>
            </main>
        </div>
    );
};

export default MainLayout;