import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesData = fetch('/categories.json').then(res => res.json());

const LeftSidePart = () => {

    const categories = use(categoriesData);

    return (
        <div className='sticky top-5'>
            <h1 className='mb-4 text-lg font-semibold text-[#000000]'>All Categories</h1>
            <div className='grid grid-cols-1 gap-3'>
                {
                    categories.map(menu => (
                        <NavLink
                            key={menu.id}
                            to={`/category/${menu.id}`}
                            className={({ isActive }) =>
                                `btn bg-base-100 border-none text-accent hover:bg-base-200 ${isActive ? 'bg-base-200 font-bold' : ''}`
                            }
                        >
                            {menu.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default LeftSidePart;