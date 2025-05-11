'use client';

import React from 'react';

function TechStackIcon ({ TechStackIcon, Language }) {
    return (
        <main className="group p-6 rounded-2xl bg-blue-dark/50 hover:bg-blue-black-medium/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
            <section className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-light-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                <img
                    src={TechStackIcon}
                    alt={`${Language} icon`}
                    className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
                />
            </section>
            <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
                {Language}
            </span>
        </main>
    );
};

export {TechStackIcon}; 
